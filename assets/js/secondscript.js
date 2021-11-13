$(document).ready(function () {
  $("#search-button").on("click", function () {
    var searchValue = $("#search-value").val();

    $("#search-value").val("");

    searchStock(searchValue);
  });
});

function searchStock(searchValue) {
  $.ajax({
    type: "GET",
    url:
      "yfapi.net/v6/finance/quote?region=US&lang=en&symbols=%22%20%22" +
      searchValue +
      "XqHD0VzaV3InJ7ayecPd7DPJPwE6GoK7VDiJhmH1",
    datatype: "json",
    success: function (data) {
      if (history.indexOf(searchValue) === -1) {
        history.pushState(searchValue);
        window.localStorage.setItem("history", JSON.stringify(history));

        makeRow(searchValue);
      }
      var title = $("<h3>")
        .addClass("card-title")
        .text(data.name + "(" + new Number().toLocaleDateString() + ")");
      var card = $("<div>").addClass("Card");
    },
  });
}
