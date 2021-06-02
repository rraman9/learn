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
const { name } = john;
console.log(name);
const { gender} = john;
console.log(gender);
const { name2, gender2, address} = john;
console.log(name2, gender2, address);
const { address : residence} = john;
console.log(residence);
const {emails: [, secondEmailId]} = john;
console.log(secondEmailId);