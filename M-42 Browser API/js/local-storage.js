const hello = localStorage.getItem('hello');
console.log(hello);
const hello2 = window.localStorage.getItem('hello 2');
console.log(hello2);


const setAge = () =>{
    localStorage.setItem('age', 31);
}