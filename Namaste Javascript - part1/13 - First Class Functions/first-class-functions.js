// Anonymous functions
//function () {
//    console.log('This is an example of anonymous function!');
//}

// Function Statement/Declaration
function a() {
    console.log('a is called!');
}

// function Expression
var b = function () {
    console.log('b is called!');
}

// named function Expression
var c = function xyz() {
    console.log(xyz);
}

// difference between params and arguments-
function d(parameter1, parameter2){
    console.log(parameter1, parameter2);
}
d('argument1', 'argument2')

// First class function aka first order citizens
function p(param) {
    console.log(param);
    return function q() {
        console.log('returning function as a value');
    }
}
p(function() {console.log('Sending function as an argument');})
