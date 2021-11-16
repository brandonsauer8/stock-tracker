
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://yfapi.net/v6/finance/quote',
  params: {modules: 'defaultKeyStatistics,assetProfile'},
  headers: {
    'x-api-key': 'YvOamXCJ3f9vTVoV8zbHk3xtPqkf6K8x2aR22hXt'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});