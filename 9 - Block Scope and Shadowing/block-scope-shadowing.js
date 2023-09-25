//// ex-1
{
    var a = 10
    let b = 20
    const c = 30
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

////10
////20
////30
////10
/////Users/deepakurs/Documents/github-main/Javascript/namaste-javascript/9 - Scope and Shadowing/scope-shadowing.js:11
////console.log(b);
////            ^

////ReferenceError: b is not defined

//// ex-2
let e = 4
{
    var d = 41
    let e = 5
    const f = 6
    console.log(d);
    console.log(e);
    console.log(f);
}
//console.log(d);
console.log(e);
//console.log(f);

////41
////5
////6
////4

// ex-3
var g = 4
{
    let g = 41
    let h = 5
    const i = 6
    console.log(g);
    console.log(h);
    console.log(i);
}
console.log(g);
//41
//5
//6
//4

//// ex-4
let j = 4
{
    var j = 41
    let k = 5
    const l = 6
    console.log(j);
    console.log(k);
    console.log(l);
}
/////Users/deepakurs/Documents/github-main/Javascript/namaste-javascript/9 - Block Scope and Shadowing/block-scope-shadowing.js:46
////    var j = 41
////        ^

////SyntaxError: Identifier 'g' has already been declared

