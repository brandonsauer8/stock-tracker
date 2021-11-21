function initRun() {
  $("#search-button").on("click", function () {
    let val = $("#search-value").val()
    window.location = "stock-detail.html?stock=" + val
    storeCompany(val);
  })
};

// add company name to companyArray
var storeCompany = function (city) {
  companyArray.push(city);
  companyStorage();
};

// creating variables and array for storage
var namesInStorage = localStorage.getItem("company-names");
var companyArray;
if (namesInStorage === null) {
  companyArray = [];
} else {
  companyArray = JSON.parse(namesInStorage);
};

// set array to localStorage
var companyStorage = function() {
  localStorage.setItem("company-names", JSON.stringify(companyArray));
}


$(document).ready(initRun())
