/*
Fundamentals
1.1: variable(let, const) three types of variable
1.2: conditions (<, >, ===, !==, <=, >=) && , ||, if-else
1.3: array: declare, length, index, push, pop, indexOf, includes
1.4: for loop , while
1.5: function return parameters
1.6: Object property, including array, object


------------
ES6
1.template string ${}
2. spread (...)
2.1: copy then add a new element to an array
2.2: use filter to remove an element from an array
3. Arrow Function
3.1: no parameter, 
3.2: single
3.3: multiple
3.4: multiline
4. Destructuring: Object and array
5. Object declaration shorthand
6. function parameter default value
7. Optional chaining

-------------------------

Browser API
1. Local storage & session storage 
2. location API
3. History API
4. fetch

-------------------------

Others
1. array: map, forEach, filter, find
2. ternary operator
3. logical and logical or && || 
4. JSON(stringify, parse)
5. + (string to number)
*/


// Object declaration shorthand:---
const x = 50;
const y = 100;
const obj = {
    x: x, 
    y: y
};
// shortcut
const obj1 = {x, y};

const name = 'Solakola';
const area = 'Dhaka';

const kingKong = {
    name: name,
    area: area
}
const kingKong2 = {name, area};
console.log(kingKong2);