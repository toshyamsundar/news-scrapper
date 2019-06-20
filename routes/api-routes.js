let axios = require("axios");
let db = require("../models");
let cheerio = require("cheerio");

module.exports = app => {
  app.get("/", (req, res) => {
    response.send("Hello Wold");
  });

  app.get("/scrape", (req, res) => {
    axios
      .get("http://www.echojs.com/")
      .then(results => {
        let $ = cheerio.load(results.data);

        let article = {};
        $("article h2").each((i, element) => {
          article.headline = $(element)
            .children("a")
            .text();
          article.url = $(element)
            .children("a")
            .attr("href");

          db.Article.create(article)
            .then(dbArticle => {
              res.json(dbArticle);
            })
            .catch(error => {
              res.json(error);
            });
        });
      })
      .catch(error => {
        console.log(error);
        res.status(404).json(error);
      });
  });
};
