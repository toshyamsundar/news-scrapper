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

        $("article h2").each((i, element) => {
          let title = $(element)
            .children("a")
            .text();
          let link = $(element)
            .children("a")
            .attr("href");

          console.log(`link: ${link}`);
          console.log(`title: ${title}`);
        });
      })
      .catch(error => {
        console.log(error);
        res.status(404).json(error);
      });
  });
};
