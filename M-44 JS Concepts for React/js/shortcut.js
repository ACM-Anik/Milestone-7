// 'something', 5, true, {}, []
// '', 0 , false, null, undefine,

let myVar = 5;
// check truthy:
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// check negative or anything falsy:
if(myMoney){
     
}

const money = 80;
let food;
if(money > 100){
    food = 'biriyani';
}
else{
    food = 'cha biscuit';
}


// ternary:--
let food1 = money > 100 ? 'biriyani' : 'cha biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100)? 'coke' : 'filter water';
console.log(drink);


// Conversion:-
// number to string shortcut conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number shortcut conversion 
const input = '520';
const inputNum = +input;
console.log(inputNum);


// && , ||:-
let isActive = true;
const showUser = () => {console.log('Show user')};
const hideUser = () => {console.log('Hide User')};
isActive ? showUser() : hideUser();

// Use && if left side is "true", then right side will be executed
isActive && showUser();

// use || if the lef side is false, then right side will be executed 
isActive || showUser();


// toggle boolean:-
isActive = !isActive; 