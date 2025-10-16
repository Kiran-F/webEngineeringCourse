async function loadData() { 
const users = await Promise.all([
fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()), 
fetch('https://jsonplaceholder.typicode.com/users/2').then(res => res.json()), 
fetch('https://jsonplaceholder.typicode.com/users/3').then(res => res.json()) 
]); 
console.log("Users:", users);
} 
loadData(); 