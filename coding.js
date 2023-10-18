//1. setTimeout
////function printNumbers() {
////        for(let i = 0; i < 10; i++) {
////            setTimeout(() => {
////                console.log(i+1)
////            }, i*500)
////        }
////}

//const printNumbers = () => {
//    function pN(num) {
//        setTimeout(()=> {
//            console.log(num+1)
//        }, num*500)
//    }
//    for(var i = 0; i < 10; i++) {
//        pN(i)
//    }
//}

//printNumbers()


//2. call apply bind
//const name = {
//    fName: 'Deepak',
//    lName: 'Urs',
//    printFullName: function (city, state) {
//        //return this.fName+'-'+this.lName+'-'+city+'-'+state;
//        console.log(this.fName+'-'+this.lName+'-'+city+'-'+state)
//    }
//}
//name2 = {
//    fName: 'Akshay',
//    lName: 'Saini'
//}


//console.log(name.printFullName.call(name2, 'Dehradun', 'Uttarakhand'))
//console.log(name.printFullName.apply(name2, ['Dehradun', 'Uttarakhand']))
//let res = name.printFullName.bind(name2)
//console.log(res('Dehradun', 'Uttarakhand'))

// bind polyfill
//Function.prototype.myBind = function (...args) {
//    let obj = this
//    params = args.slice(1)
//    return function(...args2) {
//        obj.apply(args[0], [...params, ...args2])
//    }
//}

//let res = name.printFullName.myBind(name2)
//console.log(res('Dehradun', 'Uttarakhand'))

//3. PROMISE.all implementation
//function myPromiseAll(iterable) {
//    return new Promise((resolve, reject) => {
//        let iterableArray = new Array(iterable.length)
//        let unresolved = iterable.length

//        if(unresolved == 0) {
//            resolve(iterable)
//            return
//        }

//        iterableArray.forEach(async (item, index)=> {
//            try {
//                const res = await item
//                iterableArray[index] = res
//                unresolved -= 1
    
//                if(!unresolved) {
//                    resolve(iterable)
//                    return
//                }
//            }
//            catch(err) {
//                reject(err)
//            }
//        })
//    })
//}
//myPromiseAll()

//4. Infinite Currying
//const sum = (a,b) => {
//    return a + b
//}
//function curry(a) {
//    return function curried(b) {
//        if(b) {
//            return curry(a+b)
//        }
//        else {
//            return a
//        }
//    }
//}
////let curry = (a) => (b) => b ? curry(a+b): a
//console.log(curry(1)(2)(3)(4)(5)())

// 5. Event bubbling and capture
//document.querySelector('#grand-parent').addEventListener('click', (e) => {
//    console.log('grand-parent clicked!')
//    document.querySelector('#gp-val').innerHTML = 'Same Value'
//}, true)

//document.querySelector('#parent').addEventListener('click', (e) => {
//    console.log('parent clicked!')
//    document.querySelector('#p-val').innerHTML = 'Same Value'
//}, false)

//document.querySelector('#child').addEventListener('click', (e) => {
//    console.log('child clicked!')
//    document.querySelector('#c-val').innerHTML = 'Same Value'
//}, true)

////6. event delegation
//document.querySelector('#form').addEventListener('keyup', (e) => {
//    console.log(e);
//    if(e.target.dataset.lowercase != undefined) {
//        e.target.value = e.target.value.toLowerCase()
//    }
//    if(e.target.dataset.uppercase != undefined) {
//        e.target.value = e.target.value.toUpperCase()
//    }
//})


class Calculator{
    constructor() {
        this.result = 0
        this.queue = []
    }

    add = (val) => {
        this.queue.push({operation: 'add', 'value': val})
        return this
    }
    
    sub = (val) => {
        this.queue.push({operation: 'sub', 'value': val})
        return this
    }

    mul = (val) => {
        this.queue.push({operation: 'mul', 'value': val})
        return this
    }

    delay = (time) => {
        this.queue.push({operation: 'delay', time})
        return this
    }

    equals(callback) {
        const executeNext = () => {
            if(this.queue.length == 0) {
                callback(this.result)
                return
            }

            const operation = this.queue.shift()

            switch(operation.operation) {
                case 'add': 
                    this.result += operation.value
                    break
                case 'sub': 
                    this.result -= operation.value
                    break
                case 'mul': 
                    this.result *= operation.value
                    break
                case 'delay': 
                    setTimeout(executeNext, operation.time)
                    return
                default:
                    throw new Error('Unsupported operation', `${operation.operation}`)
            }

            executeNext()
        }

        executeNext()
        return this
    }

}


let calc = new Calculator().add(2).sub(1).mul(4).delay(1000).add(5).equals((res) => console.log(res))
