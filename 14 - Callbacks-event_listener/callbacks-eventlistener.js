// ex-1: callback functions
function x(param) {
    console.log(param);
    param()
}
x(function y(){
    console.log('y is called');
})

// ex-2: callback-function example
setTimeout(function () {
    console.log('setTimeout is called');
}, 2000);

// ex-3: works in browser
function addingEventListener() {
    var counter = 0;
    document.getElementById('button').addEventListener('click', function () {
        console.log('Button is clicked', ++counter, 'times');
    })
}
addingEventListener()