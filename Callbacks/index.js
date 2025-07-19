//Importance of Callbacks in JavaScript
//Callbacks are essential responsible for handling asynchronous operations in JavaScript.
//They allow functions to be executed after a certain task is completed, enabling non-blocking code execution.
//Callbacks are functions that are passed as arguments to other functions and are executed after the completion of a task.

//example of a simple callback function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// here processUserInput is a High Order Function that takes a callback function as an argument.
function processUserInput(callback) {
    const name = 'Alice';
    // Here, the callback function is called after processing the user input
    callback(name);
}

processUserInput(greet);

//Now comes to problem of Callbacks
//Callbacks can lead to "callback hell" or "pyramid of doom" when multiple nested making the code hard to read and maintain. 

//example of callback hell : ecommerce application

//NOTE. : all these task are dependent on each other, so we need to call them in a specific order

//Grows horizontally as more callbacks are added, leading to deeply nested code.

// Hvae oder : createOrder --> processPayment --> sendConfirmationEmail --> updateInventory

api.createOrder(orderDetails, function(order) {
    api.processPayment(order.id, function(payment) {
        api.sendConfirmationEmail(order.id, function(email) {
            api.updateInventory(order.items, function(inventory) {
                console.log('Order processed successfully!');
            });
        });
    });
});  

// above solition is not scalable and leads to deeply nested callbacks, making the code difficult to read and maintain.

// Description : When order was created, it calls the payment processing function, which in turn calls the email sending function, and so on.
// This leads to deeply nested callbacks, making the code difficult to read and maintain.





//It also leads to Inversion of Control (IOC) where the control flow is inverted, making it difficult to follow the program's logic.

// It is the responsibility of createOder api to handle the order creation, payment processing, email sending, and inventory updating.
// we blindly trust that each function will execute in the correct order and handle errors appropriately.