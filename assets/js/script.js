

var options = {
  method: 'GET',
  url: 'https://yfapi.net/v6/finance/quote',
  params: {region: 'us', lang:'en', symbols: 'AAPL,BTC-USD' },
  headers: {
    'x-api-key': 'YvOamXCJ3f9vTVoV8zbHk3xtPqkf6K8x2aR22hXt'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

var insights = function() {
  
}
   