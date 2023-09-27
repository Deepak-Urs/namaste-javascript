// ex-1
function a() {
    console.log('a is called');
}
a()
console.log('GEC called!');

// ex-2
function b() {
    console.log('b is called!');
}
b()
setTimeout(function cb() {
    console.log('cb of second function!');
}, 2000)
console.log('End of ex-2');

// ex-3
console.log('Start of the DOM APIs');
document.getElementById('button').addEventListener('click', function cb2(params) {
    console.log('button has been clicked!');
})
console.log('End of the DOM APIs');

// ex-4
console.log('Start of the FETCH APIs');
setTimeout(function cb3(params) {
    console.log('Logged the setTimeout');
})
fetch("https://api.netflix.com")
.then(function cbf() {
    console.log('CB netflix');
}, 2000)
console.log('End of the FETCH APIs');
