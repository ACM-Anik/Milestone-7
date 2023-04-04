const numberIncrement = () =>{
    const incrementBox = document.getElementById('count');
    let increment = incrementBox.innerText;
    ++increment;
    incrementBox.innerHTML= increment;
    const setLocalS = localStorage.setItem('Number', increment);
}

const displayLocalStorageData = () =>{
    const getIncrement = localStorage.getItem('Number');
    const incrementBox = document.getElementById('count');
    incrementBox.innerText = getIncrement;
    console.log(getIncrement);
}
displayLocalStorageData();

