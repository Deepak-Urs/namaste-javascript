function counter() {
    var count = 0

    this.incrementCounter = function () {
        count++;
        console.log('count', count);
    }

    this.decrementCounter = function () {
        count--;
        console.log('count', count);
    }
}

var ctr = new counter()
ctr.incrementCounter();
ctr.incrementCounter();
ctr.decrementCounter();


function test() {
    var a = 10, b = 20, c = 45;
    return a + b
}

console.log(test());