// Ex-1
function c() {
    var i = 1
    setTimeout(function() {
        console.log(i);
    }, i * 1000)
    console.log('Namaste JS!');
}
//c()

// Ex-2
function x() {
    for(var i = 1; i<=5; i ++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000)
    }
}
//x()

// Ex-3
function y() {
    for(let i = 1; i<=5; i ++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000)
    }
}
//y()

// Ex-4
function z() {
    for(var i = 1; i<=5; i ++) {
        function p(i) {
            setTimeout(function() {
                console.log(i);
            }, i*1000)
        }
        p(i)
    }
}
z()

