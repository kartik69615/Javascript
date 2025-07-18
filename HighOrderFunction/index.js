/*
    This file is part of the High Order Function module.
    use of map() :   to iterate over an array and apply a function to each element.
    use of filter(): to filter elements based on a condition.
    use of reduce(): to accumulate values based on a condition./think as to reduce the array to a single value.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using map to create a new array with each element squared
const squaredNumbers = numbers.map(num => num * num);

//extended way to write this : 
// here num is the individual element of the array
// const squaredNumbers = numbers.map(function(num) {
//     return num * num;
// });

// console.log('Squared Numbers:', squaredNumbers);

//Make an object with name(first name and last name) and age
const people = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Doe', age: 30 },
    { firstName: 'Bob', lastName: 'Smith', age: 35 },
    { firstName: 'Alice', lastName: 'Johnson', age: 22 },
    { firstName: 'Jane', lastName: 'Smith', age: 30 },
    { firstName: 'Alice', lastName: 'Johnson', age: 22 },
];

// Using filter to get people older than 25
// this will return an array of objects that match the condition
// const olderThan25 = people.filter(person => person.age > 25);
// this is known as chaining methods
const olderThan25 = people.filter(person => person.age > 25).map(person => person.firstName);
console.log('People older than 25:', olderThan25);


//Can do the above task using reduce as well
//syntax of reduce : first parameter is the accumulator, second parameter is the current value
// the accumulator is the value that is returned after each iteration
// the current value is the current element being processed in the array
// the third parameter is the initial value of the accumulator

const olderThan25UsingReduce = people.reduce((listOfPeople, person) => {
    if (person.age > 25) {
        listOfPeople.push(person.firstName);
    }
    return listOfPeople;
}, []);


console.log('People older than 25 using reduce:', olderThan25UsingReduce);