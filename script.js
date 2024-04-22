const apiKey = '08bde48fa053542893000b87984b9753';
const apiURl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const WeatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city){
    const response = await fetch(apiURl + city + `&appid=${apiKey}`)
    let data = await response.json();

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else{
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == 'Clouds'){
             WeatherIcon.src="weatherApp/images/clouds.png";
            }else if(data.weather[0].main == 'Clear'){
             WeatherIcon.src="weatherApp/images/clear.png";
            }else if(data.weather[0].main == 'Rain'){
             WeatherIcon.src="weatherApp/images/rain.png";
            }else if(data.weather[0].main == 'Drizzle'){
             WeatherIcon.src="weatherApp/images/drizzle.png";
            }else if(data.weather[0].main == 'Mist'){
             WeatherIcon.src="weatherApp/images/mist.png";
            }
    
            document.querySelector('.weather').style.display = 'block'
            document.querySelector('.error').style.display = 'none'

        }

}

searchButton.addEventListener('click' , ()=>{
    checkWeather(searchBox.value)
})



