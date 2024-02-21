import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaVideo } from 'react-icons/fa'; // Import FaVideo icon from React Icons library
import './Home.css'; // Import CSS file for Home component

const Home = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    // Navigate to the Room component when the "Join" button is clicked
    navigate('/room');
  };

  return (
    <div>
      <center>
        <br />
        <FaVideo fontSize="2rem" style={{ marginRight: '5px', color: 'red' }} /> {/* Use FaVideo icon */}
        <h3>Communicate Quickly & Effectively</h3>
        <br />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
        />
        <button className="join-button" onClick={handleJoinRoom}>
          Join
        </button>
        <br />
        <br />
      </center>
    </div>
  );
};

export default Home;
