// 1. JSON => Stringify parse
const actor = {
    name: 'Shuvo',
    age: 32,
    movies: ['Dhaka Attack', 'Mission Extreme', 'Black War']
};

const actorStr = JSON.stringify(actor);
console.log(actorStr);

const studentObj = JSON.parse(actorStr);
console.log(studentObj);


// 2.Fetch :--
fetch('url')
.then(res => res.json())
.then(data => console.log(data));


// object keys, values
const keys = Object.keys(actor);
const values = Object.values(actor);


// for
const numbers = [34, 56, 77, 89];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);


// for of on array like object

// loop on an object using for in


// add or remove from an array
const products = [
    {name: 'laptop', price: 42000, brand: 'dell', color: 'silver'},
    {name: 'phone', price: 20000, brand: 'realMe', color: 'gray'},
    {name: 'watch', price: 1000, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 300, brand: 'lanceCart', color: 'silver'},
    {name: 'camera', price: 30000, brand: 'canon', color: 'black'},
];

const newProduct = {name: 'Webcam', price: 800, brand:'hikVision'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');


