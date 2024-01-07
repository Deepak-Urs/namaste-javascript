// CALLBACKS

// PROS
// simple callback function - async operation
console.log('Namaste');
setTimeout(function () {
    console.log('Hello World!');
}, 2000)
console.log('Javascript');

// CONS-1
// callback hell (pyramid of doom) example
const cart = ['a', 'b', 'c']
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
})

// CONS-2
// inversion of control example
api.createOrder(cart, function () {
    api.proceedToPayment()
})