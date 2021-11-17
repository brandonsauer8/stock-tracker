$(document).ready(function(){


// fetching data from polygon API
var fetchNews = () => {
    var apiCurrent = "https://api.polygon.io/v2/reference/news?apiKey=WUhXPjX2roHFdCHXADtS37dJ9ezEDXwB";

    fetch(apiCurrent).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayNews(data);
            });
        } else {
            alert("News not loading");
        }
    });
};

// creating links of news articles pulled from API
var displayNews = function(newsArticles) {
    $(".news-links").html(
        "<a href='" + newsArticles.results[0].amp_url + "'>" + newsArticles.results[0].title + "</a>" + "<br>" +
        "<a href='" + newsArticles.results[1].amp_url + "'>" + newsArticles.results[1].title + "</a>" + "<br>" +
        "<a href='" + newsArticles.results[2].amp_url + "'>" + newsArticles.results[2].title + "</a>" + "<br>" +
        "<a href='" + newsArticles.results[3].amp_url + "'>" + newsArticles.results[3].title + "</a>" + "<br>" +
        "<a href='" + newsArticles.results[4].amp_url + "'>" + newsArticles.results[4].title + "</a>" + "<br>" +
        "<a href='" + newsArticles.results[5].amp_url + "'>" + newsArticles.results[5].title + "</a>" + "<br>" +
        "<a href='" + newsArticles.results[6].amp_url + "'>" + newsArticles.results[6].title + "</a>" + "<br>" +
        "<a href='" + newsArticles.results[7].amp_url + "'>" + newsArticles.results[7].title + "</a>" + "<br>" +
        "<a href='" + newsArticles.results[8].amp_url + "'>" + newsArticles.results[8].title + "</a>" + "<br>" +
        "<a href='" + newsArticles.results[9].amp_url + "'>" + newsArticles.results[9].title + "</a>"
    )
};

//Calling fetch function
fetchNews();
  
  });





