var APIKey = "4dfc7c11589b740565997c3673697b30";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var searchBtn = document.getElementById("searchBtn");
var cityText = document.getElementById("cityText")


searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var cityString = cityText.value
    console.log(cityString)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4dfc7c11589b740565997c3673697b30',
            'X-RapidAPI-Host': 'https://openweathermap.org/api'
        }
    };
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityString}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
});