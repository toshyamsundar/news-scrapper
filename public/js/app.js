$(document).on("click", "#scrapeArticles", event => {
  $.get("/api/scrape")
    .then(results => {
      // console.log(results);
      renderScrapedArticles(results);
    })
    .catch(error => {
      console.log(error);
    });
});

let renderScrapedArticles = data => {
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
      .addClass("btn btn-success save-article")
      .text("Save");

    $(h4Elem).append(aTag);
    $(divCardBody).append(h4Elem, btnElem);
    $(divCard).append(divCardBody);
    $("#news-articles").append(divCard);
  });
};

$(document).on("click", ".save-article", function(event) {
  event.preventDefault();

  let articleId = $(this)
    .parents(".card")
    .attr("data-id");

  $.post("/api/saveArticle/" + articleId).then(results => {
    $(this)
      .text("Saved")
      .addClass("btn-danger");
  });
});

$(document).on("click", "#savedArticles", function(event) {
  event.preventDefault();
  $("#saved-articles").empty();

  $.get("/api/getSavedArticles")
    .then(results => {
      renderSavedArticles(results);
    })
    .catch(error => {
      console.log(error);
    });
});

$(document).on("click", "#home", function(event) {
  $("#news-articles").show();
  $("#saved-articles").hide();
});

let renderSavedArticles = data => {
  data.forEach(article => {
    $("#news-articles").hide();
    $("#saved-articles").show();
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
      .addClass("btn btn-success save-article")
      .text("Add Note");

    $(h4Elem).append(aTag);
    $(divCardBody).append(h4Elem, btnElem);
    $(divCard).append(divCardBody);
    $("#saved-articles").append(divCard);
  });
};
