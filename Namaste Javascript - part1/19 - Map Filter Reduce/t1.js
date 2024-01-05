// Map
var arr= [1,2,3,4]

var op1 = arr.map(function binary(x) { return x.toString(2)})
function binary2(x) { return x.toString(2)}
var op2 = arr.map(binary2)

var op3 = arr.map((x) => {return x.toString(2)})
var op4 = arr.map((x) => x.toString(2))

console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4);


// Reduce
var arrF = [1,2,3,4]
var opF1 = arrF.filter(function (x){ return x%2 == 0});
var opF2 = arrF.filter(x => x > 2);
console.log(opF1);
console.log(opF2);
