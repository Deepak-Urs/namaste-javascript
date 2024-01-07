//consider an e-commerce app
const cart = ['shirt', 'pant', 'kurta'];

// A promise is an object representing an eventual completion or rejection of an async operation

// A promise operation in it can be-
const promise = createOrder(cart);
promise.then(function (orderId) { proceedToPayment(orderId)});

// The above code can be written as -
createOrder(cart).then(function (orderId) { proceedToPayment(orderId)})
// The above helps in solving the 'Inversion of COntrol' as the function is attached and not just passed as in case of regular callback functions

// Promise chaining
createOrder(cart)
.then(function(orderId) {
    return proceedToPayment(orderId)
})
.then(function(paymentInfo) {
    return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo) {
    return updateWallet(paymentInfo)
})

// equivalent promise chaining in ES6
creatOrder(cart).then((orderId) => proceedToPayment(orderId))
                .then((paymentInfo) => showOrderSummary(paymentInfo))
                .then((paymentInfo) => updateWallet(paymentInfo))



