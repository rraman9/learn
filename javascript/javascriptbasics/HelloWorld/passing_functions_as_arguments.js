function sum(numbers, transform) {
    let result = 0;
    for (let i=0; i<numbers.length; i++) {
        result += transform(numbers[i]);
    }
    return result;
}

function square(number) {
    return number**2;
}
const cube = n=> n**3;
console.log(sum([2,3],square));
console.log(sum([2,3],cube));