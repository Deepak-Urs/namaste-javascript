// Ex-1
function x() {
    let a = 10;
    return function y() {
        console.log(a);
    }
}
let z = x()
z()

// Ex-2
function p() {
    let i = 20;
    function q() {
        let j = 30
        function r() {
            let k = 40
            console.log(i,j,k);
        }
        return r
    }
    i = 100
    return q
}
let res = p()
res()()

