//1. How to declare a variable using let and const
const fatherName = 'Shankar';
let season = 'rainy';
season = 'winter';


// 2. Basic conditions: >, <, ===, !==, <=, >=
// Multiple conditions: &&, ||
if(fatherName === 'Shankar' || season === 'rainy'){}
else if (fatherName === 'shankar'){}
else{}

//3. Array
// index, length, push
const numbers = [40, 50, 48, 38];
numbers[0] = 60;


// 4. for loop
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5. Function 
function multiply(){
    return;
}
console.log(multiply())

// 6. object
// 3 ways to access properties by name
const student = {
    name: 'Shuvo',
    age: 32,
    movies: ['Dhaka Attack', 'Mission Extreme', 'Black War']
}
const myVariable = 'age';

console.log(student.age); //direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]);//access via property name in a variable

