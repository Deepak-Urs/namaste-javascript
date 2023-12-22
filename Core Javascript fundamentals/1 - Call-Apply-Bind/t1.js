// call
console.log('CALL function');
let name1 = {fn: 'A', ln: 'S'}
let name2 = {fn: 'D', ln: 'U'}

let printFullName = function (hometown, state) {
    console.log(this.fn, this.ln, 'from', hometown, state);
}

printFullName.call(name1, "dehradun", "uttarakhand")
printFullName.call(name2, "mysore", "karnataka")
console.log('\n');

// apply
console.log('APPLY function');
printFullName.apply(name1, ['D', 'U'])
printFullName.apply(name2, ['M', 'K'])
console.log('\n');

// bind
console.log('BIND function');
let pFN = printFullName.bind(name1, 'D', 'U')
let pFN2 = printFullName.bind(name1, 'M', 'K')
pFN()
pFN2()