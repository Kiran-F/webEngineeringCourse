// Function to print message
function showMessage() {
  console.log("Hello, We are learning JavaScript");
}

// Call the function every 2 seconds using setInterval()
let intervalID = setInterval(showMessage, 2000);

// Stop the interval after 6 seconds using setTimeout()
setTimeout(function() {
  clearInterval(intervalID);
  console.log("Interval stopped after 6 seconds");
}, 6000);
