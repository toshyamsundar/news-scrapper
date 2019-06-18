let express = require("express");
let cheerio = require("cheerio");
let axios = require("axios");
let mongoose = require("mongoose");
let db = require("./models");

let PORT = process.env.PORT || 3000;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScrapper";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

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

app.listen(PORT, () => {
  console.log(`Express server listening on PORT ${PORT}`);
});
