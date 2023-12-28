// prototypal inheritance

arr = [1,2,3,4]
arr.__proto__ // -> array
arr.__proto__.__proto__ // -> object
arr.__proto__.__proto__.__proto__ // -> null


function abcd() {
    console.log('abcd');
}
abcd.__proto__ // -> function
abcd.__proto__.__proto__ // -> object
abcd.__proto__.__proto__.__proto__ // -> null

//NOTE:
Array.prototype // -> function
Function.prototype // -> function

//polyfill
Function.prototype.myBind = function() {
    console.log('Sample of Polyfill');
}


obj1 = {
    name: 'DU',
    getName: function() {
        console.log(this.name);
    }
}

object2 = {}
object2.__proto__ = obj1
object2.getName()

