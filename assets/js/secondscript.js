
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://yfapi.net/v6/finance/quote',
  params: {modules: 'defaultKeyStatistics,assetProfile'},
  headers: {
    'x-api-key': 'XqHD0VzaV3InJ7ayecPd7DPJPwE6GoK7VDiJhmH1'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});