var APIKey = "058d9811a06090fb1760d402c75df68e";
var searchHistory = [];

// var city;
// var queryURL =
// "http://api.openweathermap.org/data/2.5/weather?q=" +
// city +
// "&appid=" +
// APIKey;

var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var todayContainer = document.querySelector("#today");
var forecastContainer = document.querySelector("#forecast");
var searchHistoryContainer = document.querySelector("#history");

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function renderSearchHistory() {
  searchHistoryContainer.innerHTML=""
  for (var i=searchHistory.length-1; i >= 0; i--) {
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("aria-controls", "today forecast");
    btn.classList.add("history-btn", "btn-history");
    btn.setAttribute("data-search", searchHistory[i]);
    btn.textContent=searchHistory[i];
    searchHistoryContainer.append(btn)
  }
}

function appendToHistory(search) {
  if (searchHistory.indexOf(search) !== -1) {
    return;
  }
  searchHistory.push(search);
  localStorage.setItem("search-history", JSON.stringify(searchHistory));
  renderSearchHistory();
}

function getSearchHistory () {
var storedHistory = localStorage.getItem("search-history");
if (storedHistory) {
  searchHistory = JSON.parse(storedHistory);
}
renderSearchHistory()
}

//write a fuction to render today forecast card. need to create elements for date var date = dayjs().tz(timezone).format('M/D/YYYY');
//store api response data for temp wind humididy weather icon icon description. 

// var card = document.createElement('div');
//   var cardBody = document.createElement('div');
//   var heading = document.createElement('h2');
//   var weatherIcon = document.createElement('img');
//   var tempEl = document.createElement('p');
//   var windEl = document.createElement('p');
//   var humidityEl = document.createElement('p');
//   var uvEl = document.createElement('p');
//   var uviBadge = document.createElement('button');


//function for 5 day forecast card. function duplicates single day forecast.
// var startDt = dayjs().tz(timezone).add(1, 'day').startOf('day').unix();
//   var endDt = dayjs().tz(timezone).add(6, 'day').startOf('day').unix();

// function renderItems(city, data) {
//   renderCurrentWeather(city, data.current, data.timezone);
//   renderForecast(data.daily, data.timezone);
// }






function apiRequest(location) {
var { lat } = location;
var { lon } = location;
var cityString = location.name;
fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
  ).then(function (res) {
    return res.json();
  }).then(function (data) {
    renderItems(cityString, data);
  }).catch(function (err) {
    console.error(err);
  })

  // var lat;
  // var lon;
  // event.preventDefault();
  // var cityString = cityText.value;
  // console.log(cityString);

  // fetch(
  //   `https://api.openweathermap.org/geo/1.0/direct?q=${cityString}&limit=5&appid=${APIKey}`
  // ).then(function (response) {
  //   if (response.ok) {
  //     console.log(response);
  //     response
  //       .json()
  //       .then(function (data) {
  //         console.log(data);
  //         console.log(data[0].lat);
  //         lat = data[0].lat;
  //         lon = data[0].lon;
  //         console.log(lat);
  //         console.log(lon);
  //         secondApiResponse(lat, lon);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  // });
}

function fetchCords(search) {
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${APIKey}`
  ).then(function(res) {
    return res.json();

  }).then(function(data) {
    if (!data[0]) {
      alert("location not found")
    }else {
      appendToHistory(search);
      apiRequest(data[0]);
    }
    }).catch(function(err) {
      console.error(err)
    });

    // .then((data) => data.json())
    // .then((data) => {
    //   console.log(data);
    //   for (var i = 0; i < data.length; i++) {
    //     var weather = document.createElement("li");
    //   }
    // });
}
searchBtn.addEventListener("click", apiRequest);
