const btn1 = document.getElementById('Exc1');
const btn2 = document.getElementById('Exc2');
const btn3 = document.getElementById('Exc3');
const btn4 = document.getElementById('Exc4');

// Exercise 1
function convert(str) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(str.toUpperCase());
        }, 1000); // 1000 milliseconds delay
    });
}

async function CapitalCase() {
    try {
        const inputString = "kiran";
        console.log("\n--- Exercise 1 ---");
        console.log("--- Starting Exercise 1: CapitalCase (Awaiting 1000ms) ---");
        const result = await convert(inputString);
        console.log(`Converted string: "${result}" (Input: ${inputString})`);
        document.getElementById('oneTask').innerHTML = 
        `
        <b>Lab Exercise 1</b> </br>
        Converted string: "${result}" (Input: ${inputString}) 
        `;
    } catch (error) {
        console.error(`${error.message}`);
    }
}
// CapitalCase();
btn1.addEventListener('click', () => {
    CapitalCase();
})



// Exercise 2
function getRandomNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Generate a random integer between 1 and 10
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            resolve(randomNumber);
        }, 500);
    });
}

async function callgetRno() {
    try {
        console.log("\n--- Exercise 2 ---");
        console.log("Starting async operation... Awaiting random number (500ms).");
        document.getElementById('twoTask').innerHTML = `Starting async operation... Awaiting random number (500ms).`;
        const randomNumber = await getRandomNumber();
        console.log(`Awaited random number: ${randomNumber}`);
        document.getElementById('twoTask').innerHTML = 
        `
        <b>Lab Exercise 2</b> </br>
        Awaited random number: ${randomNumber}`;

    } catch (error) {
        console.error("An error occurred in Ex 2:", error);
    }
}
// callgetRno();
btn2.addEventListener('click', () => {
    callgetRno();
});

//Exercise 3
function sumOfPositives() {
    console.log("\n--- Exercise 3 ---");
    const array = [1, -4, 12, 0, -3, 29, -150];
    console.log(`Input Array: [${array}]`);
    const sum = array
        .filter(num => num > 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log(`Output: ${sum}`); // Expected Output: 42 (1 + 12 + 29)
    document.getElementById('threeTask').innerHTML = 
    `<b>Lab Exercise 3</b> </br>
     <p>Input Array: [${array}]</p>
     Output as sum of positive numbers only: ${sum}`;
    return sum;
}
// sumOfPositives();
btn3.addEventListener('click', () => {
    sumOfPositives();
})


//Exercise 4
const abbreviateName = (name) => {
    console.log("\n--- Exercise 4 ---");
    const input = name;
    console.log(`[Ex 4] Input String: "${input}"`);

    // 1. split(' ') -> splits the name into words
    // 2. map(word => word[0]) -> extracts the first character of each word (using an arrow function)
    // 3. join(',') -> joins the initials with a comma
    const initials = input
        .split(' ') 
        .map(word => word[0])
        .join(',');
    console.log(`Output: ${initials}`); // Expected Output: S,N,Z
    return initials;
};

// const name= "Sultan Nooruddin Zangi";
// abbreviateName(name);
btn4.addEventListener('click', () => {
    let name = "Sultan Nooruddin Zungi";
    let capsInitials = abbreviateName(name);
    document.getElementById('fourTask').innerHTML = `
    <b>Lab Task 4</b> </br>
    <p>Input was ${name}</p>
    <p>Output ${capsInitials}</p>
    `
})