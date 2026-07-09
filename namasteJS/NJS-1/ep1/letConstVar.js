// let ( LET is a bit stricter than VAR)

//#1
//console.log(b);
//console.log(a);

//let a = 10;
//var b = 100;

// undefined
// refError: cannot acces a before init


//#2
var aa = 10;
var aa = 100;
console.log(aa);

let bb = 1;
bb = 11;
console.log(bb);

//let bb = 11; 
// --> this will cause syntaxErr: identifier already declared


// const (CONST is stricter than LET)

const x = 1000;

// #1
//const x1;
//x1 = 1000;
// causes syntax error

// #2
const x2 =1000;
x2 = 1001;
// causes typeErr, because x2 is not reassignable