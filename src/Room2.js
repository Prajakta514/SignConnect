// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { FaVideo } from 'react-icons/fa';
// import './Home.css';
// import imageSrc from './Images/d3.jpg'; // Import your image

// const Room2 = () => {
//   const { roomId } = useParams(); // Access roomId from URL

//   // Function to join the room
//   const mymeeting = async (roomId) => {
//     const appId = 642888086;
//     const serverSecret = '4d197bee469209641364f9ea1aa7adb1';
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appId,
//       serverSecret,
//       roomId,
//       Date.now().toString(),
//       "user_name"
//     );
//     const zc = ZegoUIKitPrebuilt.create(kitToken);

//     zc.joinRoom({
//       container: document.getElementById("video-container"), // Reference to the video container
//       scenario: {
//         mode: ZegoUIKitPrebuilt.OneONoneCall,
//       },
//     });
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <br />
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//       <div>
//         <br />
//         <h3> Communicate Qucikly and Effectively</h3>
//         <br/>
//         </div>
//         <div>
          
//         <center>
//         <button className="join-button" onClick={() => mymeeting('a')}>Join</button> 
//         </center>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Room2;

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { FaVideo } from 'react-icons/fa';
import imageSrc from './Images/i6.jpg'; // Import your image

const Room2 = () => {
  const { roomId } = useParams(); // Access roomId from URL

  // Function to join the room
  const mymeeting = async (roomId) => {
    const appId = 642888086;
    const serverSecret = '4d197bee469209641364f9ea1aa7adb1';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "user_name"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: document.getElementById("video-container"), // Reference to the video container
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh',marginTop:'40px',marginLeft:'540px', background: 'linear-gradient(to right bottom, #4e54c8, #8f94fb)', padding: '20px' }}>
      <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '30px', textAlign: 'center' }}>
        <img src={imageSrc} alt="communication" style={{ width: '300px', borderRadius: '50%', marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'Arial', fontSize: '28px', color: '#4e54c8', marginBottom: '20px' }}>Connect Quickly and Effectively</h2>
        <p style={{ fontFamily: 'Arial', fontSize: '18px', marginBottom: '30px' }}>Start a video call instantly to communicate efficiently</p>
        <button className="join-button" onClick={() => mymeeting('a')} style={{ backgroundColor: '#4e54c8', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', fontSize: '18px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Join Video Call</button>
      </div>
    </div>
  );
};

export default Room2;
