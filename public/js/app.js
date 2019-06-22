$(document).on("click", "#scrapeArticles", event => {
  $.get("/scrape")
    .then(results => {
      console.log(results.dbArticles[0]);
      renderArticles(results);
    })
    .catch(error => {
      console.log(error);
    });
});

let renderArticles = data => {
  $("#news-articles").empty();
  data.dbArticles.forEach(article => {
    let divCard = $("<div>")
      .addClass("card my-1 bg-light")
      .attr("data-id", article._id);
    let divCardBody = $("<div>").addClass("card-body d-flex justify-content-between");
    let h4Elem = $("<h4>");
    let aTag = $("<a>")
      .attr("href", article.url)
      .attr("target", "_blank")
      .text(article.headline);
    let btnElem = $("<button>")
      .addClass("btn btn-success")
      .text("Save");

    $(h4Elem).append(aTag);
    $(divCardBody).append(h4Elem, btnElem);
    $(divCard).append(divCardBody);
    $("#news-articles").append(divCard);
  });
};
