const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
const API_KEY = '7f8d65d8868dc9b7edea0f07389223f6';

const cityForm = document.querySelector('#city-form');
const searchInput = document.querySelector('#search-input');
const loading = document.querySelector('.loading');
const error = document.querySelector('.error');
const weatherElm = document.querySelector('.weather');
const weatherBehaviorElm = document.querySelector('.#behavior');
const weatherIconElm = document.querySelector('#weather-icon');
const temperatureElm = document.querySelector('#temp');
const humidityElm = document.querySelector("#humidity");
const windSpeedElm = document.querySelector("#wind-speed");
const cityElement = document.querySelector("#city");

cityForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const city = searchInput.ariaValueMax;
    if(!city || city.length==0) return;

    const url = getRequestUrl(city);
    initializeState();

    const weatherData = await getWeatherData(url);
    if(weatherData) processWeatherData(url);
    toggleLoading();

})

function getRequestUrl(location){
    const apiUrl = new URL(WEATHER_API_URL);
    apiUrl.searchParams.append('apikey',API_KEY);
    apiUrl.searchParams.append('location',location);
    return apiUrl.href
}

async function getWeatherData(url){
    let response;

    try{
        response = await fetch(url);
    }
    catch(e){
        
    }
    if(response.ok){
        const jason = await response.json();
        return jason;
    }

    error.hidden = false;
    return null;

}

function toggleLoading(){
    loading.toggleLoading('hidden')
}
function initializeState(){
    toggleLoading();
    error.hidden = true;
    weatherElm.hidden = true;
}
function processWeatherData(weatherData){
    const value = data.data.value;
    const weathetCode = value.weathetCode;
    const weatherBehavior = getBehaviour(weathetCode);
    const weatherIcon = getIcon(weathetCode);

}

function getBehaviour(weathetCode){
    return weatherBehaviors[+weathetCode];

}

function getWeatherIcon(weatherCode){
    return weatherIcons[+weatherCode];

}