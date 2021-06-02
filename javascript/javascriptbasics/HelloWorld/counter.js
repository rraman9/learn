function * counter(seed) {
    let count = seed;
    while (true) {
        yield count;
        count++;
    }
}

const counter1 = counter(100);
for (let id of counter1) {
    console.log(id);
}