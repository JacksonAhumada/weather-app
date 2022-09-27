var APIKey = "058d9811a06090fb1760d402c75df68e";
var city;
var queryURL =
"http://api.openweathermap.org/data/2.5/weather?q=" +
city +
"&appid=" +
APIKey;

var searchBtn = document.getElementById("searchBtn");
var cityText = document.getElementById("cityText");

function apiRequest(event) {
    var lat;
    var lon;
    event.preventDefault();
  var cityString = cityText.value;
  console.log(cityString);

  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityString}&limit=5&appid=${APIKey}`
  )
    .then(function(response){
        if (response.ok) {
            console.log(response);
            response.json()
            .then(function(data){
                console.log(data);
                    console.log(data[0].lat);
                    lat = data[0].lat;
                    lon = data[0].lon;
                    console.log(lat);
                    console.log(lon);
                    secondApiResponse(lat,lon);
                })
                .catch((err) => console.error(err));
            }
        });
    } 

    function secondApiResponse(lat,lon) {
        console.log(lat,lon)
    
        
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        
        var weather = document.createElement('li');
        
      }
    });
}
searchBtn.addEventListener("click", apiRequest);
