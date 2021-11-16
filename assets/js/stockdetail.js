$(document).ready(getValue)

//window get location
function getValue() {
  let loc = window.location
  let result = getUrlVars()
  let stockName = result["stock"]
  console.log("stock", stockName)
  // make api call
  fetchStockDetails(stockName)
}

function fetchStockDetails(stockName) {
  var options = {
    method: "GET",
    url: "https://yfapi.net/v6/finance/quote",
    params: { region: "us", lang: "en", symbols: stockName },
    headers: {
      "x-api-key": "XqHD0VzaV3InJ7ayecPd7DPJPwE6GoK7VDiJhmH1",
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

function printStockDetails(data){
    $('.stock-details').html(
        `
        <h3> ${data.displayName}</h3>
        <div> Post Market Price $${data.postMarketPrice}</div>
        <div>Open 15,861.00</div>
        <div>Today's High 15,861.00</div>
        <div>Today's low 15,861.00</div>
        <div>52 Week High 15,861.00</div>
        <div>52 Week Low 15,861.00</div>
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
