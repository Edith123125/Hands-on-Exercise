import React from "react";

// Child component
const Message = ({ text }) => {
  return <p>{text}</p>;
};

// Parent component
const PropsDemo = () => {
  return (
    <div>
      <h2>Props Demo</h2>
      <Message text="This is a message passed via props!" />
    </div>
  );
};

export default PropsDemo;
