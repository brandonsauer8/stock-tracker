$(document).ready(function(){


// fetching data from polygon API
var fetchNews = () => {
    var apiCurrent = "https://api.polygon.io/v2/reference/news?limit=10&apiKey=WUhXPjX2roHFdCHXADtS37dJ9ezEDXwB";

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
var displayNews = function(newsArticles){

    let res   = newsArticles.results
    let block = ''
    for(let i=0; i< res.length; i++){
       block += 
        `<div class="border-2 p-4 lg:w-1/2 cursor-pointer" onclick="window.location.href = '${res[i].article_url}'">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
       <img alt=${res[i].title} class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src=${res[i].image_url}>
          <div class="flex-grow">
            <h3 class="text-gray-500 mb-3">${res[i].author}</h3>
            <p class="mb-4">${res[i].title}</p>
          </div>
        </div>
      </div>
      `
    }

    $(".news-links").html(block)

};



//Calling fetch function
fetchNews();
  
  });



