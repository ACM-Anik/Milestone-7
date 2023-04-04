const clearLocalStorage = localStorage.clear();

const addLocalStorage = localStorage.setItem("Name", "Anik");
const addLS2 = localStorage.setItem('age', 40);

const getLS = localStorage.getItem('Name');
const getLS2 = localStorage.getItem('age');
console.log(getLS);
console.log(getLS2);

const removeAge = localStorage.removeItem('Name');
const removeAge2 = localStorage.removeItem('age');

const uSAPresident = {firstName: 'Abraham', lastName: 'Linkon'};
const strUSAP = JSON.stringify(uSAPresident);
console.log(strUSAP);
const setObject = localStorage.setItem('uSAPresident', strUSAP);

