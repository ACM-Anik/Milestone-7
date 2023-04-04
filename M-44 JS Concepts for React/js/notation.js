const person = {
    name: 'lal Nil Holud bhai',
    profession: 'Traffic Surgeon',
    age: 39,
    address: 'Sahabag',
    25: 'summer',
    'son-name' : 'sunny',
    city: 'Dhaka',

}

// Dot notation
const prof1 = person.profession;

// bracket notation
const prof2 = person["profession"];
const pName = 'profession';
const prof3 = person[pName];
console.log(prof2);
console.log(prof3);

// const season= person.25; (wrong)
const season= person[25];
console.log(season);

const son = person['son-name'];
console.log(son);