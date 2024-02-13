// // Post.js

// import React, { useState, useEffect } from 'react';
// import './Post.css';
// import { Avatar } from "@material-ui/core";
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import NearMeIcon from '@material-ui/icons/NearMe';
// import { ExpandMoreOutlined } from "@material-ui/icons";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
// import ShareIcon from '@material-ui/icons/Share';
// import firebase from './firebase';
// import 'firebase/firestore';

// function Post({ profilePic, media, username, timestamp, message, postId }) {
//   const [likes, setLikes] = useState(0);
//   const [comments, setComments] = useState([]);
//   const [commentInput, setCommentInput] = useState('');
//   const [showCommentInput, setShowCommentInput] = useState(false);

//   useEffect(() => {
//     const fetchLikes = async () => {
//       const db = firebase.firestore();
//       const doc = await db.collection('posts').doc(postId).get();
//       setLikes(doc.data()?.likes || 0);
//     };

//     const fetchComments = async () => {
//       const db = firebase.firestore();
//       const commentsSnapshot = await db.collection('posts').doc(postId).collection('comments').get();
//       const fetchedComments = commentsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setComments(fetchedComments);
//     };

//     fetchLikes();
//     fetchComments();
//   }, [postId]);

//   const handleLike = async () => {
//     try {
//       const db = firebase.firestore();
//       const postRef = db.collection('posts').doc(postId);

//       await postRef.update({
//         likes: firebase.firestore.FieldValue.increment(1)
//       });

//       setLikes(likes + 1);
//     } catch (error) {
//       console.error("Error updating like count:", error);
//     }
//   };

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();

//     if (commentInput.trim() !== '') {
//       try {
//         const db = firebase.firestore();
//         const commentsRef = db.collection('posts').doc(postId).collection('comments');

//         await commentsRef.add({
//           username: username,
//           text: commentInput,
//           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//         });

//         // Refresh the comments
//         const commentsSnapshot = await commentsRef.get();
//         const fetchedComments = commentsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setComments(fetchedComments);

//         // Clear the comment input
//         setCommentInput('');
//       } catch (error) {
//         console.error('Error adding comment:', error);
//       }
//     }
//   };

//   const toggleCommentInput = () => {
//     setShowCommentInput(!showCommentInput);
//   };

//   const handleShare = () => {
//     // Implement share functionality here
//     console.log('Sharing post:', postId);
//   };

//   return (
//     <div className="post">
//       <div className="post__top">
//         <Avatar src={profilePic} className="post__avatar" />
//         <div className="post__topInfo">
//           <h3>{username}</h3>
//           <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
//         </div>
//       </div>

//       <div className="post__bottom">
//         <p>{message}</p>
//       </div>

//       {media && (
//         <center>
//           {media.includes('video') ? (
//             <div className="post__video">
//               <video controls aria-label="Video Player" style={{ width: '96%', height: 'auto' }}>
//                 <source src={media} type="video/mp4" />
//               </video>
//             </div>
//           ) : (
//             <div className="post__image">
//               <img src={media} alt="" />
//             </div>
//           )}
//         </center>
//       )}

//       <div className="post__options">
//         <div className="post__option" onClick={handleLike}>
//           <ThumbUpIcon className="like2" style={{ color: '#1976D2', fontSize: '24px' }} />
//           <p>Like ({likes})</p>
//         </div>

//         <div className="post__option" onClick={toggleCommentInput}>
//           <ChatBubbleOutlineIcon style={{ color: '#4CAF50', fontSize: '24px' }} />
//           <p>Comment</p>
//         </div>
//         <div className="post__option" onClick={handleShare}>
//           <ShareIcon style={{ color: '#E91E63', fontSize: '24px' }} />
//           <p>Share</p>
//         </div>
//         <div className="post__option">
//           <AccountCircleIcon style={{ color: '#FFC107', fontSize: '24px' }} />
//           <ExpandMoreOutlined />
//         </div>
//       </div>

//       {/* Comment input */}
//       {showCommentInput && (
//         <>
//           <form className="post__commentBox" onSubmit={handleCommentSubmit} style={{ marginLeft: '60px' }}>
//             <input
//               type="text"
//               placeholder="Add a comment..."
//               value={commentInput}
//               onChange={(e) => setCommentInput(e.target.value)}
//               aria-label="Add a comment"
//             />
//             <button type="submit" aria-label="Post">Post</button>
//           </form>
//           <br />
//           <div className="post__comments" style={{ marginLeft: '60px' }}>
//             {comments.map((comment) => (
//               <div key={comment.id} className="post__comment">
//                 <strong>{comment.username}</strong>: {comment.text}
//               </div>
//             ))}
//           </div>
//           <br />
//         </>
//       )}
      
//     </div>
//   );
// }

// export default Post;

import React, { useState, useEffect } from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShareIcon from '@material-ui/icons/Share';
import { db } from './firebase';
import { collection, doc, getDoc, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

function Post({ profilePic, media, username, timestamp, message, postId }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      const postRef = doc(db, 'posts', postId);
      const docSnap = await getDoc(postRef);
      setLikes(docSnap.data()?.likes || 0);
    };

    const fetchComments = async () => {
      const commentsRef = collection(db, 'posts', postId, 'comments');
      const commentsSnapshot = await getDocs(commentsRef);
      const fetchedComments = commentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(fetchedComments);
    };

    fetchLikes();
    fetchComments();
  }, [postId]);

  const handleLike = async () => {
    try {
      const postRef = doc(db, 'posts', postId);
      await postRef.update({
        likes: likes + 1
      });
      setLikes(likes + 1);
    } catch (error) {
      console.error("Error updating like count:", error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (commentInput.trim() !== '') {
      try {
        const commentsRef = collection(db, 'posts', postId, 'comments');
        await addDoc(commentsRef, {
          username: username,
          text: commentInput,
          timestamp: serverTimestamp()
        });
        const commentsSnapshot = await getDocs(commentsRef);
        const fetchedComments = commentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setComments(fetchedComments);
        setCommentInput('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleShare = () => {
    // Implement share functionality here
    console.log('Sharing post:', postId);
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      {media && (
        <center>
          {media.includes('video') ? (
            <div className="post__video">
              <video controls aria-label="Video Player" style={{ width: '96%', height: 'auto' }}>
                <source src={media} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="post__image">
              <img src={media} alt="" />
            </div>
          )}
        </center>
      )}

      <div className="post__options">
        <div className="post__option" onClick={handleLike}>
          <ThumbUpIcon className="like2" style={{ color: '#1976D2', fontSize: '24px' }} />
          <p>Like ({likes})</p>
        </div>

        <div className="post__option" onClick={toggleCommentInput}>
          <ChatBubbleOutlineIcon style={{ color: '#4CAF50', fontSize: '24px' }} />
          <p>Comment</p>
        </div>
        <div className="post__option" onClick={handleShare}>
          <ShareIcon style={{ color: '#E91E63', fontSize: '24px' }} />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon style={{ color: '#FFC107', fontSize: '24px' }} />
          <ExpandMoreOutlined />
        </div>
      </div>

      {/* Comment input */}
      {showCommentInput && (
        <>
          <form className="post__commentBox" onSubmit={handleCommentSubmit} style={{ marginLeft: '60px' }}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              aria-label="Add a comment"
            />
            <button type="submit" aria-label="Post">Post</button>
          </form>
          <br />
          <div className="post__comments" style={{ marginLeft: '60px' }}>
            {comments.map((comment) => (
              <div key={comment.id} className="post__comment">
                <strong>{comment.username}</strong>: {comment.text}
              </div>
            ))}
          </div>
          <br />
        </>
      )}
      
    </div>
  );
}

export default Post;
