import React, { useState } from 'react';
import './Keyboard.css'; // Import the CSS file for styling

const Keyboard = () => {
  const [inputText, setInputText] = useState('');

  const handleButtonClick = (sign) => {
    setInputText((prevText) => prevText + sign);
  };

  const clearInput = () => {
    setInputText('');
  };

  const signs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const renderSignButtons = () => {
    return signs.map((sign) => (
      <button key={sign} className="key" onClick={() => handleButtonClick(sign)}>
        <img src={`ASL/${sign}.png`} alt={`${sign} sign`} />
      </button>
    ));
  };

  return (
    <div className="asl-keyboard-container">
      <h1>American Sign Language Keyboard</h1>
      <div>
        <input type="text" value={inputText} readOnly />
        <button onClick={clearInput} className="clear-button">Clear</button>
      </div>
      <div className="asl-keyboard">{renderSignButtons()}</div>
    </div>
  );
};

export default Keyboard;
