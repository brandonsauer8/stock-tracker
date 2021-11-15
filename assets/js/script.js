var options = {
  method: "GET",
  url: "https://yfapi.net/v6/finance/quote",
  params: { region: "us", lang: "en", symbols: "AAPL,BTC-USD" },
  headers: {
    "x-api-key": "YvOamXCJ3f9vTVoV8zbHk3xtPqkf6K8x2aR22hXt",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });



function initRun(){
  $("#search-button").on("click", function () {
    let val = $("#search-value").val()
    window.location = 'stock-detail.html?q='+ val
  
  });
}

  $(document).ready(initRun());