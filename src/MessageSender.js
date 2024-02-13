// import React, { useState } from 'react';
// import './MessageSender.css';
// import VideocamIcon from '@material-ui/icons/Videocam';
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import { Avatar } from '@material-ui/core';
// import { useStateValue } from './StateProvider';
// import { db, storage } from './firebase';
// // import { firestore } from 'firebase/firestore';

// // const firebase = require('firebase');
// import Post from './Post';

// function MessageSender() {
//   const [{ user }, dispatch] = useStateValue();

//   const [input, setInput] = useState('');
//   const [media, setMedia] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (media) {
//       const storageRef = firebase.storage().ref(`media/${media.name}`);
//       const uploadTask = storageRef.put(media);

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {},
//         (error) => {
//           console.error(error.message);
//         },
//         () => {
//           storageRef.getDownloadURL().then((downloadUrl) => {
//             savePost(downloadUrl);
//           });
//         }
//       );
//     } else {
//       savePost(null);
//     }
//   };

//   const savePost = (downloadUrl) => {
// 	console.log("Media Download URL:", downloadUrl);
  
// 	db.collection('posts')
// 	  .add({
// 		message: input,
// 		timestamp: firebase.firestore.FieldValue.serverTimestamp(),
// 		profilePic: user.photoURL,
// 		username: user.displayName,
// 		media: downloadUrl,
// 		likes: 0,
// 	  })
// 	  .then((docRef) => {
// 		// ... rest of the code
// 	  })
// 	  .catch((error) => {
// 		console.error('Error adding document: ', error);
// 	  });
  
// 	setInput('');
// 	setMedia(null);
//   };
  

//   const handleMediaChange = (e) => {
//     if (e.target.files[0]) {
//       setMedia(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="messageSender" style={{backgroundColor: 'white', width: '1078px'}}>
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
//           />

//           {/* File input for image or video upload */}
//           <input
//             type="file"
//             accept="image/*,video/*"
//             onChange={handleMediaChange}
//           />

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
//     </div>
//   );
// }

// export default MessageSender;


import React from 'react'

export default function MessageSender() {
  return (
    <div>
      HII
    </div>
  )
}

