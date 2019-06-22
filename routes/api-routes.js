let axios = require("axios");
let db = require("../models");
let cheerio = require("cheerio");

module.exports = app => {
  app.get("/", (req, res) => {
    response.send("Hello Wold");
  });

  app.get("/scrape", (req, res) => {
    let articles = [];
    axios
      .get("http://www.echojs.com/")
      .then(results => {
        let $ = cheerio.load(results.data);

        $("article h2").each((i, element) => {
          let headline = $(element)
            .children("a")
            .text();
          let url = $(element)
            .children("a")
            .attr("href");

          articles.push({ headline, url });
        });

        db.Article.create(articles)
          .then(dbArticles => {
            res.status(200).json({ dbArticles });
          })
          .catch(error => {
            res.status(500).json(error);
          });
      })
      .catch(error => {
        res.status(404).json(error);
      });
  });
};
