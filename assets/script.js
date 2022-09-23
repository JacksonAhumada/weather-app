var APIKey = "4dfc7c11589b740565997c3673697b30";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
.then(res => res.json())
.then(data => console.log(data))
  