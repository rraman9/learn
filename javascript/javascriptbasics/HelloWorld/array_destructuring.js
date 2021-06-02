const days = [
    'Monday','Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'
];
const [first, second, , , fifth, ,,eighth = 'Holiday!'] = days;
console.log(first, second, fifth, eighth)

function ajax({method, url}) {
    console.log(method, url);
}
ajax({
    method: 'GET',
    url: 'http://www.google.com'
});
