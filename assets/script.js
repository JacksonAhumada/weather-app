var APIKey = "058d9811a06090fb1760d402c75df68e";
var city;
var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;

var searchBtn = document.getElementById("searchBtn");
var cityText = document.getElementById("cityText");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  var cityString = cityText.value;
  console.log(cityString);

  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityString}&limit=5&appid=${APIKey}`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;
      console.log(lat);
      console.log(lon);
    })
    .catch((err) => console.error(err));
fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${APIKey}`
)
.then((data) => data.json())
    .then((data) => {
      console.log(data);
    });
});
