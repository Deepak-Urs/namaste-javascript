// ex1
let name = {
    firstName: "Deepak",
    lastName: "Urs"
}

let printName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " +state)
}

let res = printName.bind(name, "Mysuru")
res()

// ex2
Function.prototype.myBind = function (...args) {
    console.log('args seen', args);
    let obj = this
    params = args.slice(1)
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let name2 = {
    firstName: "Akshay",
    lastName: "Saini"
}

let res2 = printName.myBind(name2, "Mysuru")
res2("Karnataka")

// ex3
let printName2 = function (city, state, nation) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state + ", " + nation)
}
let res3 = printName2.myBind(name2, "Mysuru")
res3("Karnataka", "India")