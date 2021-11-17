// var getInsights = function(data) {
//     var apiUrl = "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=%22%20%22XqHD0VzaV3InJ7ayecPd7DPJPwE6GoK7VDiJhmH1";

//     fetch(apiUrl)
//         .then(function(response) {

//             if(response.ok) {
//                 response.json().then(function(data) {
//                     displayRepos(data, user);
//                 });
//             } else {
//             alert("Error: GitHub User Not Found");
//             } 
//         })
//         .catch(function(error) {
//             alert("Unable to connect to GitHub");
//         });