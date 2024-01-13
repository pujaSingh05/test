// Component2.js
import React from 'react';

const Component2 = ({ userInput }) => {
  return (
    <div>
      <h2>Component 2</h2>
      <div>User Input from Component 1: {userInput}</div>
    </div>
  );
};

export default Component2;
