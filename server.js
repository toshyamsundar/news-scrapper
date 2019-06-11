let express = require("express");
let cheerio = require("cheerio");
let axios = require("axios");
let PORT = process.env.PORT || 3000;

let app = express();

app.get("/", (request, response) => {
  response.send("Hello Wold");
});

app.listen(PORT, () => {
  console.log(`Express server listening on PORT ${PORT}`);
});
