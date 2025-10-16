// Function that returns a Promise
function checkmail() {
  return new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random() * 10) + 1; // Generates number 1–10
    console.log("Random number:", randomNumber);

    if (randomNumber > 5) {
      resolve("Mail received successfully!");
    } else {
      reject("Failed to arrive");
    }
  });
}

// Calling the function
checkmail()
  .then((mail) => {
    console.log(mail); // If promise is resolved
  })
  .catch((error) => {
    console.log(error); // If promise is rejected
  })
  .finally(() => {
    console.log("Experiment completed");
  });
