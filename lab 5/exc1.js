function msg(){   
alert("JavaScript Lab no. 5");   
} 
function calculateMax(){
    // take 3 numbers from user 
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let num3 = parseFloat(prompt("Enter third number:")); 
    // find largest using Math.max() 
    let largest = Math.max(num1, num2, num3); 
    // show the result 
    alert("The largest number is: " + largest);
}