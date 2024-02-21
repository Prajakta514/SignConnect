

// import React, { useState, useEffect } from 'react';
// import './Feed.css';
// import MessageSender from './MessageSender';
// import StoryReel from './StoryReel';
// import Post from './Post';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import db from './firebase';
// import Home from './Home';
// import Room from './Room';

// function Feed() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     db.collection('posts')
//       .orderBy('timestamp', 'desc')
//       .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
//   }, []);

//   return (
//     <div className="feed">
//       <div className="conf">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/room/:roomId" element={<Room />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//       <br />
//       <hr />
//       <br />
//       <StoryReel />
//       <MessageSender />

//       {posts.map((post) => (
//         <Post
//           key={post.id}
//           postId={post.id}
//           profilePic={post.data.profilePic}
//           message={post.data.message}
//           timestamp={post.data.timestamp}
//           username={post.data.username}
//           image={post.data.image}
//         />
//       ))}
//     </div>
//   );
// }

// export default Feed;
import React, { useState, useEffect } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
// import StoryReel from './StoryReel';
import Post from './Post';
import { Routes, Route } from 'react-router-dom';
import {db} from './firebase';
import Home from './Home';
import Room from './Room';
// import Video from './Video';
import Keyboard from './Keyboard';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
  }, []);

  return (
    <div className="feed">
      <div className="conf">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </div>
      <hr />
   {/* <Keyboard/> */}
      {/* <StoryReel /> */}
    
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          video={post.data.video}
          media={post.data.media}
        />
      ))}
     

    </div>
  );
}

export default Feed;
