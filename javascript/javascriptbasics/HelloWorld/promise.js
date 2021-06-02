// Promise (class introduced in ES 2015) is an intermediary
function sum(x,y) {
    // 3 states of Promise - Initially promise is unfulfilled

    return new Promise((resolve, reject) => {
        if (typeof x !='number' || typeof y !='number') {
            reject(new Error('at least one argument was not an integer!'));
            return;
        }
        setTimeout(() => {
            resolve(x+y)
        }, 2000);
    });

}
const promise = sum(12,3);
// function passed to then() gets called when promise reaches resolved state
promise.then(value => {
   console.log(value);
}).catch(reason => console.log("Got an error!"));
console.log("Continuing further");

// async await - useful when you have to do a series of things on promise
async function doSerialCallsToPromise() {
    console.log(1);
    try {
        let result = await sum(12, 13);// yields here
    } catch(error) {
        console.log(error.message);
    }
    console.log(result);

}
doSerialCallsToPromise();
console.log(2);