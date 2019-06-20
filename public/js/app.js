$(document).on("click", "#scrapeArticles", event => {
  $.get("/scrape")
    .then(results => {
      console.log(results);
    })
    .catch(error => {
      console.log(error);
    });
});
