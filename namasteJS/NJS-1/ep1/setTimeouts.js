//simple

function x() {
    var i = 1;
    setTimeout(() => console.log(i), 3000);
    console.log("Namaste javascript!")
}
//x();


// pass by VALUE --> let
// let has block scope, each time setTimeout is run, i has a new closure copy every single time
function x1() {
    var i = 1;
    for(let i = 1; i <=5; i ++) {
        setTimeout(() => console.log(i), i*1000);
    }
    
    console.log("Namaste javascript!")
}
//x1();


// pass by REFERENCE --> VAR
// VAR
function x2() {
    var i = 1;
    for(var i = 1; i <=5; i ++) {
        function close(x) {
            setTimeout(() => console.log(x), i*1000);
        }
        close(i);
    }
    
    console.log("Namaste javascript!")
}
x2();

