import React, { useState } from 'react';
import Component1 from '../component/component1.js';
import Component2 from '../component/component2.js';

const TestPage = () => {
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (input) => {
    setUserInput(input);
  };

  return (
    <div>
      <h1>Test Page</h1>
      <Component1 onUserInput={handleUserInput} />
      <Component2 userInput={userInput} />
    </div>
  );
};

export default TestPage;
