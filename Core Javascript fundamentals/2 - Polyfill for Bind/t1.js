name = {fn: 'Ak', ln: 'Saini'}
let printFullName = function() {
    console.log(this.fn, ',', this.ln);
}

Function.prototype.myBind = function (...args) {
    let obj = this
    return function() {
        obj.call(args[0])
    }
}

var pfn = printFullName.myBind(name, 'D', 'U')
pfn()

// --------------------------------------------

Function.prototype.myBind2 = function (...args) {
    let obj = this
    let params = args.slice(1)
    console.log('args[0] ', args[0]);
    console.log('args[1] ', args[1]);
    console.log('params ', params);

    return function(...args2) {
        console.log('args2 ', args2);
        obj.apply(args[0], [...params, ...args2])
    }
}

let printFullName2 = function(s, c) {
    console.log(this.fn, ',', this.ln, '-', c, ',', s);
}


var pfn3 = printFullName2.myBind2(name, 'Karnataka')
pfn3('India')