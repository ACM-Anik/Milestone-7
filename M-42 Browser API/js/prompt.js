const showAlert = () =>{
    alert('Bondhu tor kache taka ache? Dhar dite parbi?');
};

const lendMoney = () => {
    confirm('Will lend me 500 taka');
}


const getInfo = () => {
    const name = prompt('Tell me your name');
    console.log(name);
    if(name === null){
        alert('Name na dile kam hobe ne');
    }
    else{
        console.log(name, 'Welcome to this world');
    }
}