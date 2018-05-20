import axios from 'axios';
const API_KEY='83ba20d1393d1fe421366f7ec230d7fd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FEATH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log('request is:',request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}