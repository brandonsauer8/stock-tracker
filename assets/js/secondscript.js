let apiKey = 'yRbGmb9wfwaWYv2NqP91C1NtIeTe2JUo8LxsQ9wk'

$(document).ready(getValue)

var options = {
  method: 'GET',
  url: 'https://yfapi.net/v1/finance/trending',
  params: {region: "us", lang: "en" },
  headers: {
    'x-api-key': 'yRbGmb9wfwaWYv2NqP91C1NtIeTe2JUo8LxsQ9wk'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
});

function printStockDetails(data) {
  $(".stock-trending").html(

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
});
}