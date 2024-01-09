const cart = ['shoes', 'pants', 'kurta']

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
        return orderId
    })
    .catch((err) => {
        console.log('Error seen - ', err.message)
    })
    .then((orderId) => {console.log('createOrders output -->', orderId); return proceedToOrderPayment(orderId)})
    .catch((err) => console.log(err.message))
    .then((paymentInfo) => {console.log('proceedToOrderPayment output -->', paymentInfo); return showOrderSummary(paymentInfo)})
    .catch((err) => console.log(err.message))
    .then((orderSummary) => {console.log('showOrderSummary output -->', orderSummary); return updateWallet(orderSummary)})
    .catch((err) => console.log(err.message))
    .then(() => console.log('This promise block runs no matter what...'))

// PROMISE CREATION function
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // createOrder main logic -> validate cart , send back orderId

        if (!validateCart(cart)) {
            const error = new Error("Cart is not valid")
            reject(error)
        }

        const orderId = '12345'
        if (orderId) {
            setTimeout(() => resolve(orderId), 2000)
        }
    })

    return pr
}

function proceedToOrderPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("Payment Successful");
    })
}

function validateCart(cart) {
    return true
}

function showOrderSummary(paymentInfo) {
    return new Promise(function (resolve, reject) {
        resolve("Updated Order Summary")
    })
}

function updateWallet(orderSummary) {
    return new Promise(function (resolve, reject) {
        resolve("Wallet Updated")
    })
}