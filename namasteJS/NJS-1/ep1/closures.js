// closures are functions bundled along with their lexical scope

function x() {
    var a = 7;
    function y() {
        var b = 10;
        console.log(a);
    }
    return y;
}
//var z = x(); 
//var zz = z();
//console.log(z());
//console.log(zz);



function x() {
    var a = 1;
    function y() {
        var b = 2;
        function z() {
            console.log(a,b);
        }
        z();
    }
    a = 100;
    y();
    console.log(a)
}
x();

//applications
// module design pattern, currying, functions like once, memoize, maintaining state in async operations, setTimeouts, operators, iterators etc.,