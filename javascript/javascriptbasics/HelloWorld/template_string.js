const message = 'Good morning', john = {
    name: 'John',
    city: 'Bangalore',
    getCity() {
        return this.city;
    }
};
const welcomeMessage = message + ' ' + john.name + "! How is the weather in " + john.city;
console.log(welcomeMessage);
const welcomeMessageNew = `${message} ${john.name}! 
How is the weather in ${john.getCity()}`
console.log(welcomeMessageNew);