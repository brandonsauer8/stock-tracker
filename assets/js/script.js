function initRun() {
  $("#search-button").on("click", function () {
    let val = $("#search-value").val()
    window.location = "stock-detail.html?stock=" + val
  })
}

$(document).ready(initRun())
