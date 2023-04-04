const numbers = [40, 50, 48, 38, 20, 70];

const student = {
    name: 'Shuvo',
    age: 32,
    movies: ['Dhaka Attack', 'Mission Extreme', 'Black War']
};


// 1. Template String:-
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);



// 2. Arrow Function:-
 const getFiftyFive = () => 55;
 const addSixtyFive = num => num + 65;
 const isEven = x => x % 2 == 0;
 const addThree = (x, y, z) => x + y + z;
 const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
 }
 console.log(doMath(10, 20));



//  3. Spread Operator:-
const newNumbers = numbers; // reference same;
const newNumbers_SpreadO = [...numbers]; //spread operator

// Create a new array from an older array and add an element:
const addWithCurrentNumbers = [...numbers, 100];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(newNumbers_SpreadO);

console.log(addWithCurrentNumbers);


