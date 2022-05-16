import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setLoading(false);
      setItems(data);
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  return (
    <div className="App">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            name: {item.name} | email: {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
