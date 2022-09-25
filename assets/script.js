var APIKey = "4dfc7c11589b740565997c3673697b30";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var searchBtn = document.getElementById("searchBtn");
var cityText = document.getElementById("cityText")


searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var cityString = cityText.value
    console.log(cityString)

    
    
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=${cityString}&limit=5&appid=${APIKey}")
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
});