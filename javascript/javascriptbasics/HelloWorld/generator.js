// Function that can be paused and resumed!
// pause -> can return intermediate values
function * foo(x) {
    console.log("x is " + x);
    console.log(1);
    yield 200;

    let input;
    input = yield 200;
    console.log(input);
    console.log(2);
    yield 201;

    return 202;
}
const iter = foo(100);
let result = iter.next(101);
console.log(result);
result = iter.next(101);
console.log(result);
result = iter.next(result.value + 1000);
result = iter.next(101);
console.log(result);