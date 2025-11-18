import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div>
        <br />
    <h2 class="text-danger">Lab Exercise</h2>
      <h3>Fetched Posts</h3>

      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ textAlign: "left", padding: "20px" }}>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "10px" }}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Posts;
