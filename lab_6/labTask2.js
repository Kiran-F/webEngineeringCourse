async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    console.log("User 1:", users[0].username);
    console.log("User 2:", users[1].username);
  } 
  catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchUsers();