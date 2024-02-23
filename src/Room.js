// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { FaVideo } from 'react-icons/fa';
// import './Home.css';
// import imageSrc from './Images/d3.jpg'; // Import your image

// const Room = () => {
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
//     <div>
//       <center>
//         <br />
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <img src={imageSrc} alt="Image" style={{ width: '30%',height: '200px', marginRight: '40px', margin:'10px' , borderRadius: '20px'}} /> {/* Image taking up 30% width */}
//           <div>
//             <FaVideo fontSize="2rem" style={{ marginRight: '5px', color: 'red' }} /> {/* Use FaVideo icon */}
//             <h3>Communicate Quickly & Effectively</h3>
//             <br />
//             <button className="join-button" onClick={() => mymeeting('a')}>Join</button> {/* Button to join the room */}
//             <div id="video-container" /> {/* Container for the video */}
//           </div>
//         </div>
//       </center>
//     </div>
//   );
// };

// export default Room;

import React, { useEffect, useRef, useState } from 'react';


import { FaVideo } from 'react-icons/fa';
import './Home.css';
import imageSrc from './Images/d3.jpg'; // Import your image


const Room = () => {
  
  
  const handleClick = () => {
    window.open('https://sign-language-detection-beta.vercel.app/', '_blank');
  };
  
  

  return (
    <div style={{ textAlign: 'center' }}>

      <br />
      <div >
      <img src={imageSrc} alt="Image" style={{ width: '50%',height: '200px', marginRight: '40px' , borderRadius: '20px'}} />
      <div>
        <br />
        
        <h3> Immerse Yourself in Signing: Start Learning with Our Detector</h3>
        <br/><button className="join-button" onClick={handleClick} style={{marginBottom:'10px'}}>View</button>
        </div>
        
        <div>
          
        <center>
        {/* <button className="join-button" onClick={() => mymeeting('a')}>Join</button>  */}
        
        </center>
        </div>
        
      </div>
    </div>
  );
};

export default Room;