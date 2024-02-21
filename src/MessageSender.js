import { useState } from 'react';
import './MessageSender.css';
import { FaVideo, FaPhotoVideo, FaSmile } from 'react-icons/fa'; // Import React Icons
import { useStateValue } from './StateProvider';
import { db, storage } from './firebase';
import firebase from 'firebase/compat/app'; // Import Firebase compatibility version
import 'firebase/compat/storage'; // Import Firebase Storage compatibility version
import 'firebase/compat/firestore'; // Import Firebase Firestore compatibility version

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (media) {
      const storageRef = firebase.storage().ref(`media/${media.name}`);
      const uploadTask = storageRef.put(media);

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.error(error.message);
        },
        () => {
          storageRef.getDownloadURL().then((downloadUrl) => {
            savePost(downloadUrl);
          });
        }
      );
    } else {
      savePost(null);
    }
  };

  const savePost = (downloadUrl) => {
    db.collection('posts')
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        media: downloadUrl,
        likes: 0,
      })
      .then((docRef) => {
        // ... rest of the code
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });

    setInput('');
    setMedia(null);
  };

  const handleMediaChange = (e) => {
    if (e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <div className="messageSender" style={{ backgroundColor: 'white', width: '920px' }}>
      <br />
      <h3 style={{ textAlign: 'center' }}>+ Create Post</h3>
      <br />
      <div className="messageSender__top ">
        <img src={user.photoURL} alt="Profile" className="avatar" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's popping, ${user.displayName} ?`}
          />

          {/* File input for image or video upload */}
          <input type="file" accept="image/*,video/*" onChange={handleMediaChange} />

          <button onClick={handleSubmit} className="shareButton btn btn-primary">
            Share
          </button>
        </form>
      </div>

      <div className="messageSender__bottom ">
        <div className="messageSender__option">
          <FaVideo style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <FaPhotoVideo style={{ color: '#27ae60' }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <FaSmile style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;

///main

// import React, { useState } from 'react';
// import './MessageSender.css';
// import VideocamIcon from '@material-ui/icons/Videocam';
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import { Avatar } from '@material-ui/core';
// import { useStateValue } from './StateProvider';
// import Keyboard from './Keyboard'; // Import the Keyboard component
// import { db, storage } from './firebase';
// import firebase from 'firebase/compat/app'; // Import Firebase compatibility version
// import 'firebase/compat/storage'; // Import Firebase Storage compatibility version
// import 'firebase/compat/firestore'; // Import Firebase Firestore compatibility version

// function MessageSender() {
//   const [{ user }, dispatch] = useStateValue();

//   const [input, setInput] = useState('');
//   const [media, setMedia] = useState(null);
//   const [showKeyboard, setShowKeyboard] = useState(false); // State to control the visibility of the keyboard

//   // Function to save post data to Firestore
//   const savePost = async (mediaUrl) => {
//     try {
//       // Save post data to Firestore
//       await db.collection('posts').add({
//         message: input,
//         media: mediaUrl,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//         username: user.displayName,
//         userImage: user.photoURL,
//       });

//       console.log('Post saved successfully!');
//     } catch (error) {
//       console.error('Error saving post:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       let mediaUrl = null;
  
//       // If media file is selected, upload it to Firebase Storage
//       if (media) {
//         const storageRef = firebase.storage().ref(`media/${media.name}`);
//         const uploadTask = storageRef.put(media);
  
//         uploadTask.on(
//           'state_changed',
//           (snapshot) => {},
//           (error) => {
//             console.error('Error uploading file to Firebase Storage:', error);
//           },
//           () => {
//             storageRef.getDownloadURL().then((downloadUrl) => {
//               mediaUrl = downloadUrl;
//               savePost(mediaUrl);
//             }).catch((error) => {
//               console.error('Error getting download URL:', error);
//             });
//           }
//         );
//       } else {
//         savePost(null);
//       }
  
//       // Reset input fields
//       setInput('');
//       setMedia(null);
//       setShowKeyboard(false);
  
//       console.log('Data saved to Firestore successfully!');
//     } catch (error) {
//       console.error('Error saving data to Firestore:', error);
//     }
//   };
  

//   // Function to handle change in media input
//   const handleMediaChange = (e) => {
//     if (e.target.files[0]) {
//       setMedia(e.target.files[0]);
//     }
//   };

//   // Function to handle clicking on the input box
//   const handleInputClick = () => {
//     setShowKeyboard(true); // Show the keyboard component when input box is clicked
//   };

//   return (
//     <div className="messageSender" style={{ backgroundColor: 'white', width: '920px' }}>
//       <br />
//       <h3 style={{ textAlign: 'center' }}>+ Create Post</h3>
//       <br />
//       <div className="messageSender__top ">
//         <Avatar src={user.photoURL} />
//         <form>
          
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="messageSender__input"
//             placeholder={`What's popping, ${user.displayName} ?`}
//             onClick={handleInputClick} // Call handleInputClick function when input box is clicked
//           />

//           {/* File input for image or video upload */}
//           <input type="file" accept="image/*,video/*" onChange={handleMediaChange} /><br/>
// <br/>

//           <button onClick={handleSubmit} className="shareButton btn btn-primary">
//             Share
//           </button>
//         </form>
//       </div>

//       <div className="messageSender__bottom ">
//         <div className="messageSender__option">
//           <VideocamIcon style={{ color: 'red' }} />
//           <h3>Live Video</h3>
//         </div>

//         <div className="messageSender__option">
//           <PhotoLibraryIcon style={{ color: '#27ae60' }} />
//           <h3>Photo/Video</h3>
//         </div>

//         <div className="messageSender__option">
//           <InsertEmoticonIcon style={{ color: 'orange' }} />
//           <h3>Feeling/Activity</h3>
//         </div>
//       </div>

//       {/* Render the Keyboard component conditionally */}
//       {showKeyboard && <Keyboard />}
//     </div>
//   );
// }

// export default MessageSender;

