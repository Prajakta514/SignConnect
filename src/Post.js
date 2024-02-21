

// import React, { useState, useEffect } from 'react';
// import './Post.css';
// import profilePlaceholder from './p1.jpg'; // Import a placeholder image for the profile picture

// function Post({ profilePic, media, username, timestamp, message, postId }) {
//   const [likes, setLikes] = useState(0);
//   const [comments, setComments] = useState([]);
//   const [commentInput, setCommentInput] = useState('');
//   const [showCommentInput, setShowCommentInput] = useState(false);

//   useEffect(() => {
//     // Simulated fetch of likes and comments
//     // Replace this with actual data fetching logic from your database
//     // This is just a placeholder for demonstration purposes
//     setLikes(Math.floor(Math.random() * 100));
//     setComments([
//       { id: 1, username: 'User1', text: 'This is a comment.' },
//       { id: 2, username: 'User2', text: 'Another comment here.' }
//     ]);
//   }, []);

//   const handleLike = () => {
//     // Increment likes count
//     setLikes(likes + 1);
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (commentInput.trim() !== '') {
//       // Add the new comment to the comments array
//       setComments([...comments, { id: comments.length + 1, username: 'CurrentUser', text: commentInput }]);
//       setCommentInput('');
//     }
//   };

//   const toggleCommentInput = () => {
//     setShowCommentInput(!showCommentInput);
//   };

//   return (
//     <div className="post">
//       <div className="post__top">
//         <img src={profilePic || profilePlaceholder} alt="Profile" className="post__avatar" />
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
//           <i className="far fa-thumbs-up" style={{ color: '#1976D2', fontSize: '24px' }}></i>
//           <p>Like ({likes})</p>
//         </div>

//         <div className="post__option" onClick={toggleCommentInput}>
//           <i className="far fa-comment" style={{ color: '#4CAF50', fontSize: '24px' }}></i>
//           <p>Comment</p>
//         </div>
//         <div className="post__option" onClick={() => console.log('Share clicked')}>
//           <i className="fas fa-share" style={{ color: '#E91E63', fontSize: '24px' }}></i>
//           <p>Share</p>
//         </div>
//         <div className="post__option">
//           <i className="far fa-user-circle" style={{ color: '#FFC107', fontSize: '24px' }}></i>
//           <i className="fas fa-ellipsis-h" style={{ fontSize: '24px' }}></i>
//         </div>
//       </div>

//       {showCommentInput && (
//         <>
//           <form className="post__commentBox" onSubmit={handleCommentSubmit}>
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
//           <div className="post__comments">
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
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt, AiOutlineUser } from 'react-icons/ai';
import { MdExpandMore } from 'react-icons/md';
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
        <img src={profilePic} alt="Avatar" className="post__avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
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
              <video  autoPlay loop muted controls aria-label="Video Player" style={{ width: '96%', height: 'auto' }}>
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
          <AiOutlineLike className="like2" style={{ color: '#1976D2', fontSize: '24px' }} />
          <p>Like ({likes})</p>
        </div>

        <div className="post__option" onClick={toggleCommentInput}>
          <AiOutlineComment style={{ color: '#4CAF50', fontSize: '24px' }} />
          <p>Comment</p>
        </div>
        <div className="post__option" onClick={handleShare}>
          <AiOutlineShareAlt style={{ color: '#E91E63', fontSize: '24px' }} />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AiOutlineUser style={{ color: '#FFC107', fontSize: '24px' }} />
          <MdExpandMore />
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
