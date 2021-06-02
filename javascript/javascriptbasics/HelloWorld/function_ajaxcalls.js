function sum(x,y, callback) {
    // async non-blocking function
    // Hey browser - please execute this function after 3 seconds
    setTimeout(() => {
        console.log("inside setTimeout");
        let result = x+y;
        callback(result);
    }, 3000);
    console.log("after call to setTimeout");
}
result = sum(2,3, (result) => {
    console.log('result=', result);
});