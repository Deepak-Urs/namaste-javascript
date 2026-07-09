//a block
{

}

//#1
{
    var a = 10;
    let b = 11;
    const c = 12;
}
console.log(a); // 10
//console.log(b); // refErr, and STOPS
//console.log(c); // refErr, and STOPS (if above line is not there)


//#2
// below works!
{
    const c1 = 1;
    {
        const c1 = 2;
        {
            const c1 = 3;
            console.log(c1);
        }
        console.log(c1);
    }
    console.log(c1);
}


// shadowing

//#1 (global)
var q = 11;
{
    let q = 19;
    console.log(q);
}
console.log(q);

//#2 (local)
let z = 12;
{
    let z =15;
    console.log(z);
}
console.log(z);


// illegal shadowing
//let t = 9;
//{
//    var t = 19;
//}
// above does not work, let is block/local scope, var is global scope
// so var tries to supersede let at it n+1th level and runs into problem

//vice versa works

// work around solution 
let t = 9;
function a() {
    var t = 19;
}
