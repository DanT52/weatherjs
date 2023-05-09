const apiKey = "08e3376ddbf462cca0498dec33003971"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return
    }
    document.querySelector(".error").style.display = "none";

    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name + ", "+data.sys.country
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " mph"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"

    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"

    }else if (data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "images/thunderstorm.png"

    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"

    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"

    }else if (data.weather[0].id >= 700 && data.weather[0].id <800 ){
        weatherIcon.src = "images/mist.png"

    }else if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }

    document.querySelector(".weather").style.display = "block"

}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value)
})

searchBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        checkWeather(searchBox.value)
    }
  })

