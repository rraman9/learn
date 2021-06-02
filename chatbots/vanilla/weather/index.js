"use strict";
const axios = require("axios");
const apfiKey = "9bef03aaba416accd11b20303d2bb0f5";
const getWeather = (location) => {
            const weatherConditions = await axios.get("http://api.weatherstack.com/current", {
                params: {
                    access_key: apiKey,
                    query: location,
                    forecast_days: 3
                }
            });
            return weatherConditions.data;
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = getWeather;