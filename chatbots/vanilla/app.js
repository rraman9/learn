'use strict';
const Readline = require('readline');
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const matcher = require('./matcher');
const weather = require('./weather');
const formatData = data => {
    console.log('data is' + data);
    return {
        location: `${data.location.name}, ${data.location.country}`,
        temperature: `${data.current.temperature}`,
        description: `${data.current.weather_descriptions}`
    }
};
rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
    matcher(reply, data => {
        switch (data.intent) {
            case 'Hello':
                console.log(`${data.entities.greeting} to you too!`);
                rl.prompt();
                break;
            case 'Exit':
                console.log("Goodbye!");
                process.exit(0);
                rl.prompt();
                break;
            case 'CurrentWeather':
                console.log(`Checking weather for ${data.entities.city}`);
                formatData(weather(data.entities.city).then(response => console.log(response))
                    .catch(error => {
                        console.log(error);
                        console.log("Problem connecting to weather service!");
                    }));
                rl.prompt();
                break;
            default:
                console.log("I don't know what you mean!");
                rl.prompt();
                break;
        }
    })
    rl.prompt();
});