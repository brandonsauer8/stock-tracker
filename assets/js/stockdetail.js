let apiKey = "2Sk7vlX6Ov6wBUQrWi5bNu2KVhwXcCl5qrKe5jv5"

// EXTRA API KEYS
// 2Sk7vlX6Ov6wBUQrWi5bNu2KVhwXcCl5qrKe5jv5
// YvOamXCJ3f9vTVoV8zbHk3xtPqkf6K8x2aR22hXt
// XqHD0VzaV3InJ7ayecPd7DPJPwE6GoK7VDiJhmH1
// yRbGmb9wfwaWYv2NqP91C1NtIeTe2JUo8LxsQ9wk

$(document).ready(getValue)

function getValue() {
  let loc = window.location
  let result = getUrlVars()
  let stockName = result["stock"]
  console.log("stock", stockName)
  fetchStockDetails(stockName)
}

function fetchStockDetails(stockName) {
  var options = {
    method: "GET",
    url: "https://yfapi.net/v6/finance/autocomplete",
    params: { region: "us", lang: "en", query: stockName },
    headers: {
      "x-api-key": "yRbGmb9wfwaWYv2NqP91C1NtIeTe2JUo8LxsQ9wk",
    },
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
      if (response.data.ResultSet.Result.length > 0) {
        let myData = response.data.ResultSet.Result[0]
        bringExtraStockDetails(myData.symbol)
      }
    })
    .catch(function (error) {
      console.error(error)
    })
}

function bringExtraStockDetails(stockSymbol) {
  var options = {
    method: "GET",
    url: "https://yfapi.net/v6/finance/quote",
    params: { region: "us", lang: "en", symbols: stockSymbol },
    headers: {
      "x-api-key": apiKey,
    },
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
      let myData = response.data.quoteResponse.result[0]
      printStockDetails(myData)
    })
    .catch(function (error) {
      console.error(error)
    })
}

function printStockDetails(data) {
  $(".stock-details").html(
    `
    <div class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
     <h1 class="long-symbol-name">
          ${data.longName} 
          <p class="symbol-name">${data.symbol}</p>
        </h1>
        
        

        <p class="current-price">
          Market Price $${data.regularMarketPrice}
        </p>
      </div>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <span class="title-font font-medium"
              >Average Rating ${data.averageAnalystRating}</span
            >
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <span class="title-font font-medium"
              >Market Volume ${data.regularMarketVolume}</span
            >
          </div>
        </div>
      </div>

      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <span class="title-font font-medium"
              >Daily High Price $${data.regularMarketDayHigh}</span
            >
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <span class="title-font font-medium"
              >Daily Low Price $${data.regularMarketDayLow}</span
            >
          </div>
        </div>
      </div>

      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <span class="title-font font-medium"
              >52 Weeks High $${data.fiftyTwoWeekHigh}</span
            >
          </div>
        </div>
        <div class="p-2 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-4 h-full items-center">
            <span class="title-font font-medium"
              >52 Weeks low $${data.fiftyTwoWeekLow}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  )
}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
  var vars = [],
    hash
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&")
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=")
    vars.push(hash[0])
    vars[hash[0]] = hash[1]
  }
  return vars
}
