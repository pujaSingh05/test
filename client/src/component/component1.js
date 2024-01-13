import React, { useState } from 'react';

const Component1 = ({ onUserInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onUserInput(value);
  };

  return (
    <div>
      <h2>Component 1</h2>
      <label>
        User Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Component1;
