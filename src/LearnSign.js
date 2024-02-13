// LearnSign.js

import React, { useState } from 'react';
import './LearnSign.css'; // Create a corresponding CSS file for styling

const signLanguageData = [
  { letter: 'A', image: 'link_to_image_A.jpg' },
  { letter: 'B', image: 'link_to_image_B.jpg' },
  // Add more letters with their corresponding images
];

const LearnSign = () => {
  const [currentLetter, setCurrentLetter] = useState(signLanguageData[0]);

  const handleLetterChange = (letter) => {
    const selectedLetter = signLanguageData.find((item) => item.letter === letter);
    setCurrentLetter(selectedLetter);
  };

  return (
    <div className="sign-language-learning">
      <div className="letters-list">
        {signLanguageData.map((item) => (
          <button key={item.letter} onClick={() => handleLetterChange(item.letter)}>
            {item.letter}
          </button>
        ))}
      </div>
      <div className="current-letter">
        <h2>Current Letter: {currentLetter.letter}</h2>
        <img src={currentLetter.image} alt={`Sign Language for ${currentLetter.letter}`} />
      </div>
    </div>
  );
};

export default LearnSign;
