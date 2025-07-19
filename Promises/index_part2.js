cart = ["shirt", "jeans", "shoes"];

//this is a function that simulates creating an order : Asynchronous operation
const promise = createOrder(cart) //return orderID

promise.then(function(orderID) {
    // This function is called when the order is created successfully
    console.log('Order created with ID:', orderID);
})

//Above code is comsumer of the promise returned by createOrder function
// Lets create the createOrder API that returns a promise

function createOrder(cart) {
    //first create a new promise, which takes a function with two parameters: resolve and reject
    const pr = new Promise((resolve, reject) => {
        if(!validateCart(cart)) {
            const err = new Error('Invalid cart');
            reject(err); //reject the promise if the cart is invalid
        }

        // Simulate an asynchronous operation (e.g., API call)
        setTimeout(() => {
            const orderID = Math.floor(Math.random() * 1000); // Generate a random order ID
            resolve(orderID); // Resolve the promise with the order ID, that means promise return an order ID
        }, 5000); // Simulate a delay of 5 seconds
    })
}
