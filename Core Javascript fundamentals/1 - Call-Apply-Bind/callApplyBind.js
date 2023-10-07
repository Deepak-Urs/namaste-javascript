// ex1
console.log('ex1 demo');
const name = {
    firstName: 'Deepak',
    lastName: 'Urs',
    printFullName: function (city, state) {
        console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state);
    }
}

const name1 = {
    firstName: 'Deepak',
    lastName: 'Urs'
}


const name2 = {
    firstName: 'Akshay',
    lastName: 'Saini'
}

// ex2 - function borrowing
name.printFullName.call(name1, "Mysuru", "Karnataka")
name.printFullName.apply(name2, ["Dehradun", "Uttarakhand"])


printFullName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state);
}


console.log('\n\nex2 demo');
//function borrowing
printFullName.call(name1, "Mysuru", "Karnataka")
printFullName.apply(name1, ["Mysuru", "Karnataka"])


// function reference borrowing
let res = printFullName.bind(name2, "Dehradun", "Uttarakhand")
res()