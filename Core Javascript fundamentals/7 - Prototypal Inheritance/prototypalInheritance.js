// ex-1
let arr = ["Deepak", "Urs"]
function sampleFunction() {
    console.log('Sample Function!')
}
let object1 = {
    name: 'Deepak Urs',
    city: 'Riverside',
    getIntro: function () {
        console.log(this.name, "from", this.city)
    }
}
object1.getIntro()

// ex-2
let arrayPrototype = arr.__proto__
console.log('arrayPrototype seen', arrayPrototype)
let apPrototype = arrayPrototype.__proto__
console.log('apPrototype seen', apPrototype)
let appPrototype = apPrototype.__proto__
console.log('appPrototype seen', appPrototype)

let sampleFunctionPrototype = sampleFunction.prototype
console.log('sampleFunctionPrototype seen', sampleFunctionPrototype)
let sfpPrototype = arrayPrototype.prototype
console.log('sfpPrototype seen', sfpPrototype)
let sfpp = apPrototype.prototype
console.log('sfpp seen', sfpp)

let objectPrototype = object1.prototype
console.log('objectPrototype seen', objectPrototype)
let opPrototype = arrayPrototype.prototype
console.log('opPrototype seen', opPrototype)
let opp = apPrototype.prototype
console.log('opp seen', opp)

// ex-3
let object2 = {
    name: "Akshay"
}
object2.__proto__ = object1
object2.getIntro()

// ex-4
let object3 = {
    name: "Akshay",
    city: "Dehradun"
}
object3.__proto__ = object1
object3.getIntro()