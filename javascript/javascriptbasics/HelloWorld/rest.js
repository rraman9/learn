// Rest and spread operator - overloaded
function foo (x, y, ...z) {
    console.log(x)
    console.log(y)
    console.log(z)
}
foo(10,11,12,13,14)
const numbers = [1,2,3,4,5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);


const john = {
    name: 'John',
    age: 43,
    address: {
        city: 'Delhi',
        region: 'North'
    },
    emails: [
        'one@one.one',
        'two@two.two'
    ]
};

const {name, age, address: city, ...rest1} = john;
console.log(name, age, city, rest1);