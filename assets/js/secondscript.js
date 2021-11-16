
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://yfapi.net/v1/finance/trending/US',
  params: {modules: 'defaultKeyStatistics,assetProfile'},
  headers: {
    'x-api-key': 'yRbGmb9wfwaWYv2NqP91C1NtIeTe2JUo8LxsQ9wk'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
       