// Using Promises 
function promiseFunction() { 
// Create a new Promise 
return  new Promise((resolve, reject) => { 
// Simulate an async operation (e.g., API call, file read) 
setTimeout(() => { 
resolve("Resolved"); 
}, 2000); // Simulate delay 
}) 
} 
console.log("Start"); 
promiseFunction() 
.then((result) => { console.log(result); 
console.log("End"); }) 
.catch((error)=>{console.log(error) 
}); 