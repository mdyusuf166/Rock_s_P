const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("search-btn");
const weather_img = document.querySelector(".weather-img"); 
const temperature = document.querySelector(".temperature"); 
const description = document.querySelector(".weather-description"); 
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");




 async function checkweather(city){
    const api_key = "cecd3dd9417fb993fd972e3e96fbffa1";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=${api_key}`;
    const weather_data =  await fetch(`${url}`).then(response=>response.json());



    if(weather_data.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";

        console.log("Error");
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";









    // console.log(weather_data); // to check data in console
    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "download1.jpg";
            break;
        case 'Clear':
            weather_img.src = "download.jpg";
            break;      
        case 'Rain':
            weather_img.src = "download7.jpg";
            break;
        case 'Mist':
            weather_img.src = "download4.jpg";
            break;
        case 'Snow':
            weather_img.src = "download5.jpg";
            break;
        
        case 'Drizzle':
            weather_img.src = "download11.jpg";
            break;
        default:
            weather_img.src = "download.jpg";
        }








}
    

searchBtn.addEventListener("click",()=>{
    let cityName = inputBox.value;
    checkweather(cityName);
});