// 1. Array destructuring:-
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;
console.log(x, y);

function boxing(num1, num2){
    const nums = [num1, num2];
    return nums;
}
console.log(boxing(20 , 30));

const [first, second] = boxing(23, 29);
console.log(first, second);

const actor = {
    name: 'Shuvo',
    age: 32,
    movies: ['Dhaka Attack', 'Mission Extreme', 'Black War']
};
const [firstMovie, secondMovie, thirdMovie] = actor.movies;
console.log(firstMovie, secondMovie, thirdMovie);


// 2. Object destructuring:--
// const {name, age} = {name: 'alu', age: 24};
const {name, age} = {id: 10, name: 'alu', age: 24, salary: 20000};

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'javascript'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Kumarkhali',
        drink: 'water',
        tableClock:{
            color: 'blue',
            price: '600',
            brand: 'casio'
        }
    },
    name: 'alu'
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const [firstLanguage, secondLanguage] = employee.languages;
const {brand} = employee?.specification?.tableClock;
