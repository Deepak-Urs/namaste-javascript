//callback fn
function x(y) {
    console.log("xb");
    y();
}
//x(function y() {
//    console.log("ya");
//})

//std example
//setTimeout(function() {console.log("timer");}, 5000)

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",
        function xyz() {
            console.log("Button Clicked!", ++count);
            
        }
    )
}
attachEventListeners();

// removeEventListeners is done usually done to clear up the js engine of unnecesary resources