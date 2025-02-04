import React, { useState, useEffect } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2>Data Fetching</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
