var x;
if (x) {
    console.log("true");
} else {
    console.log("false");
}
if (x==undefined) {
    console.log('undefined');
}
if (x===undefined) {
    console.log('undefined');
}
if (x===null) {
    console.log('null');
}
console.log(3**4);
let john = {
    name: 'John'
};
let johnathan = {
    name: 'John'
};
console.log(john == johnathan);
console.log(john === johnathan);
john.age= 32;
console.log(john);
city = "Bangalore"
switch (city) {
    case 'Mumbai':
        console.log("Beach");
        break;
    case "Bangalore":
        console.log("Lalbagh");
        break;
}
for (let x=0;x<5;x++) {
    console.log(x);
}
for (const char of 'Hello, world'){
    console.log(char)
}
const numbers = [1,2,3,4,5];
//Object.freeze(numbers)
numbers.push(6);
console.log(numbers);

const sum2 = (x,y) => { return x+y;}
const sum3 = (x,y,z) => x+y+z;
console.log(sum2(5,7));
console.log(sum3(5,7,8));
const square = function(x) {return x**2;}
console.log(square(5));
const square2 = n => n**2;
console.log(square2(35));

var a = 1;
{
    var a = 2;
    console.log( a );
}
console.log( a );

console.log( x );
var x = 1;
console.log( x );
