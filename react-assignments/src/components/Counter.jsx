import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("You clicked this button!");
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>You clicked this button {count} times</p>
    </div>
  );
};

export default Counter;
