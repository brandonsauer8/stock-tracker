let apiKey = '2Sk7vlX6Ov6wBUQrWi5bNu2KVhwXcCl5qrKe5jv5'

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
  method: 'GET',
  url: 'https://yfapi.net/v1/finance/trending/US',
  params: { region: "us", lang: "en", query: stockName},
  headers: {
    'x-api-key': '2Sk7vlX6Ov6wBUQrWi5bNu2KVhwXcCl5qrKe5jv5'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

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
}};