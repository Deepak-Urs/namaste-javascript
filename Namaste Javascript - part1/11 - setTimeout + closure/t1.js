//// closure example
//function outer() {
//    var a = 10;
//    function inner(b) {
//        console.log(a,b,c);
//    }
//    var c = 20
//    return inner
//}
//let x = outer()(15)
//console.log(x)

// print 1to5 using let
//function oneToFive() {
//    for(let i = 1; i <= 5;i++){
//        setTimeout(() => {
//            console.log(i);
//        }, i*1000)
//    }
//}
//oneToFive()

// print 1to5 using const
function oneToFiveVar() {
    for(let i = 1; i <=5; i++) {
        function printVal(i) {
        setTimeout(
            () => {
                console.log(i);
            }, i*1000)
        }
        printVal(i)
    }
}
oneToFiveVar()