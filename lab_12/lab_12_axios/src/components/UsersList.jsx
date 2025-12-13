import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UsersList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example public API - replace with any API and API key if needed
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(res.data);
      } catch (err) {
        setError(err.message || "Error fetching");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Users (from API)</h2>
      <ul>
        {data.map((u) => (
          <li key={u.id}>
            <strong>{u.username}</strong> — {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
