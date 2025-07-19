const cart = ["apple", "banana", "orange"];

//createOrder is a function that takes a cart and a callback function.
//It calls the callback function with the order ID whenever it wants to, no control over it.
//Note : so we have to trust it to call the callback function with the correct order ID.

// createOrder(cart , function(orderID) {
//     processPayment(orderID)
// })

//Note : fetch() is a function that returns a Promise.
//It is used to make HTTP requests and handle the response asynchronously.
//It is a built-in function in JavaScript that allows you to make network requests.
//Example of using fetch() to make a GET request to an API endpoint. It is an asynchronous operation so it takes time to complete.

const promise = fetch('https://www.youtube.com/watch?v=ap-6PPAuK1Y&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=3');
// NOTE : Initially, the promise is in a pending state. (not fulfilled or rejected yet) 

//Once the request is completed, the promise is either fulfilled with a response or rejected with an error.
//You can use the .then() method to handle the fulfilled state and the .catch()
//method to handle the rejected state of the promise.


console.log(promise);

promise.then(function(response){
    // This function is called when the promise is fulfilled
    console.log('Response received:', response);
}).catch(function(error) {
    // This function is called when the promise is rejected
    console.error('Error occurred:', error);
});

//Strucutere of a Promise
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value. It has three states: 


// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: Successful operation, the promise has a value.
// 3. Rejected: Failed operation, the promise has an error.



// Advantages of using Promises:
// javascript gurranted that the code will surely executed and only once. Also here we have full control over the execution of the code.

//Also the data return by the promise is immutable, meaning it cannot be changed once it is set.




// Defination of a Promise:
// A Promise is an object(contain promise state and promise data, which eventually gets filled) that represents the eventual(happening as a result at the end of a period of time or of a process) completion (or failure) of an asynchronous operation
// It allows you to write asynchronous code in a more manageable way, avoiding callback hell.
// It provides a cleaner and more readable way to handle asynchronous operations by chaining .then() and .catch() methods.


// we are not passing the function to another function rather attaching the function to the promise object itself.
// This allows us to handle the response or error in a more structured way, without nesting callbacks.

// Note : Whenever there is a promise chaining, it is important to return the promise
//        from the previous .then() method to ensure that the next .then() method receives the correct value.



// What is a Promise ? Why is it used? What are its advantages?
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value. It is used to handle asynchronous operations in a more manageable way,
// avoiding callback hell and providing a cleaner way to handle success and error cases.


// Advantages of using Promises:
// 1. Improved readability: Promises allow you to write asynchronous code in a more linear and readable way, avoiding deeply nested callbacks.
// 2. Error handling: Promises provide a structured way to handle errors using the .catch() method, making it easier to manage error cases.
// 3. Chaining: Promises can be chained together using .then() methods, allowing you
// to perform multiple asynchronous operations in a sequential manner.  