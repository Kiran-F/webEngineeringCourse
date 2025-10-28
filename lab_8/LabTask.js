    // Function 1: Using Promises
    function fetchWithPromises() {
      console.clear();
      console.log("Fetching data using Promises...");

      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => {
          console.log("User Info:");
          console.log("ID:", user.id);
          console.log("Name:", user.name);
          console.log("Email:", user.email);

          return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        })
        .then(response => response.json())
        .then(posts => {
          console.log("\nPosts by User 1:");
          posts.forEach(post => {
            console.log(`• ${post.title}`);
          });
          console.log("\nTotal Posts:", posts.length);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }

    // Function 2: Using Async/Await
    async function fetchWithAsyncAwait() {
      console.clear();
      console.log("Fetching data using Async/Await...");

      try {
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await userResponse.json();

        console.log("User Info:");
        console.log("ID:", user.id);
        console.log("Name:", user.name);
        console.log("Email:", user.email);

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const posts = await postsResponse.json();

        console.log("\nPosts by User 1:");
        posts.forEach(post => {
          console.log(`• ${post.title}`);
        });
        console.log("\nTotal Posts:", posts.length);
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Event Listeners for Buttons
    document.getElementById('promiseBtn').addEventListener('click', fetchWithPromises);
    document.getElementById('asyncBtn').addEventListener('click', fetchWithAsyncAwait);