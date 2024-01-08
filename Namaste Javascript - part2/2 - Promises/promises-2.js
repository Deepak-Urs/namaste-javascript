const cart = ['shoes', 'pants', 'kurta']

const promise = createOrder(cart)
promise
    .then(function (orderId) {
        console.log(orderId)
    })
    .catch((err) => {
        console.log('Error seen - ', err.message)
    })

// PROMISE CREATION function
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // createOrder main logic -> validate cart , send back orderId

        if(!validateCart(cart)) {
            const error = new Error("Cart is not valid")
            reject(error)
        }

        const orderId = '12345'
        if(orderId) {
            setTimeout(()=> resolve(orderId), 5000)

        }
    })

    return pr
}

function validateCart(cart) {
    return true
}