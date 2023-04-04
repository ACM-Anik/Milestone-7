const name = 'Hero';const age = 34;
const person = {name, age}; console.log(person);
// What will be the output?(Try it out)


// What is the value of ratName?
const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.rat?.name;
console.log(adventurer);


let person1 = null;
console.log(person1 ? person1 : "person is null");
// What will be the output of the above code?



const obj = {a:1};
console.log(Object.keys(obj).length===0);
// What will be the output?