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

app.get("/", (request, response) => {
  response.send("Hello Wold");
});

app.listen(PORT, () => {
  console.log(`Express server listening on PORT ${PORT}`);
});
