const apiKey = '198d242f76433c51840d9afcb8de8cf5';
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search_box = document.querySelector('.input-box')
const search_btn = document.querySelector('.search-btn')
const weather_icon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    let data = await response.json();

    // console.log(data);
    

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C ';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Mist'){
        weather_icon.src = "images/mist.png"
    }
    else if(data.weather[0].main == 'Clouds'){
        weather_icon.src = 'images/clouds.png'
    }
    else if(data.weather[0].main == 'Clear'){
        weather_icon.src = 'images/clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
        weather_icon.src = 'images/rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weather_icon.src = 'images/drizzle.png'
    }
    else if(data.weather[0].main == 'Haze'){
        weather_icon.src = 'images/clouds.png'
    }

}

search_btn.addEventListener('click', ()=>{
checkWeather(search_box.value);
})
// search_btn.addEventListener('keyup', ()=>{
// checkWeather(search_box.value);
// })
