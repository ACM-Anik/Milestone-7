const products = [
    {name: 'laptop', price: 42000, brand: 'dell', color: 'silver'},
    {name: 'phone', price: 20000, brand: 'realMe', color: 'gray'},
    {name: 'watch', price: 1000, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 300, brand: 'lanceCart', color: 'silver'},
    {name: 'camera', price: 30000, brand: 'canon', color: 'black'},
];


// 1. Map
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);


// 2. forEach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
products.forEach(product => {
  
});


// 3. Filter 
const cheap = products.filter(product => product.price <= 10000);
console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);


// 4. Find
const special = products.find(p => p.name.includes('n'));
console.log("Find:",special);