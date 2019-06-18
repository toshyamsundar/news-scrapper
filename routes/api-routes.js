let db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    response.send("Hello Wold");
  });

  app.get("/scrape", (req, res) => {
    axios
      .get("https://www.nytimes.com/")
      .then(results => {
        // console.log(results.data);
        // res.send(results.data);
        let $ = cheerio.load(results.data);

        $("article").each((i, element) => {
          console.log(element);
        });
      })
      .catch(error => {
        console.log(error);
        res.status(404).json(error);
      });
  });
};
