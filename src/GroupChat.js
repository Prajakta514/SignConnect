

import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  where,
} from "firebase/firestore";
import "./Forum.css";
import imageSrc from './Images/c3.jpg';


const Forum = () => {
  const [user, setUser] = useState(null);
  const [communities, setCommunities] = useState([]);
  const [currentCommunity, setCurrentCommunity] = useState(null);
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [newCommunityName, setNewCommunityName] = useState("");
  const [newGroupName, setNewGroupName] = useState("");
  const [showCommunityGroupList, setShowCommunityGroupList] = useState(true);
  const [showChatContainer, setShowChatContainer] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "communities"), (snapshot) => {
      setCommunities(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentCommunity) return;

    const unsubscribe = onSnapshot(
      query(collection(db, "groups"), where("communityId", "==", currentCommunity.id)),
      (snapshot) => {
        setGroups(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );

    return () => unsubscribe();
  }, [currentCommunity]);

  useEffect(() => {
    if (!currentGroup) return;

    const q = query(
      collection(db, "messages"),
      where("groupId", "==", currentGroup.id),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [currentGroup.id]: snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })),
      }));
    });

    return () => unsubscribe();
  }, [currentGroup]);

  const handleJoinCommunity = async (community) => {
    if (!user) return; // Ensure user is logged in
    try {
      // Add user to the community's members
      const communityRef = collection(db, "communities").doc(community.id);
      await communityRef.update({
        members: [...community.members, user.uid],
      });
      // Refresh communities to reflect the change
      setCommunities((prevCommunities) =>
        prevCommunities.map((c) =>
          c.id === community.id ? { ...c, members: [...c.members, user.uid] } : c
        )
      );
    } catch (error) {
      console.error("Error joining community:", error);
    }
  };

  const handleJoinGroup = async (group) => {
    if (!user) return; // Ensure user is logged in
    if (group.members.includes(user.uid)) return; // User already joined this group
  
    try {
      // Add user to the group's members
      const groupRef = collection(db, "groups").doc(group.id);
      await groupRef.update({
        members: [...group.members, user.uid],
      });
      // Refresh groups to reflect the change
      setGroups((prevGroups) =>
        prevGroups.map((g) =>
          g.id === group.id ? { ...g, members: [...g.members, user.uid] } : g
        )
      );
      // Update user's joined groups in the database
      await db.collection("users").doc(user.uid).update({
        joinedGroups: user.joinedGroups ? [...user.joinedGroups, group.id] : [group.id],
      });
    } catch (error) {
      console.error("Error joining group:", error);
    }
  };
  


  const handleCreateCommunity = async () => {
    if (!newCommunityName.trim()) return;

    const communityData = {
      name: newCommunityName.trim(),
      members: [], // Initialize members as an empty array
    };

    const docRef = await addDoc(collection(db, "communities"), communityData);
    setCommunities([...communities, { id: docRef.id, ...communityData }]);
    setNewCommunityName("");
  };

  const handleCreateGroup = async () => {
    if (!newGroupName.trim() || !currentCommunity) return;

    const groupData = {
      name: newGroupName.trim(),
      communityId: currentCommunity.id,
      members: [], // Initialize members as an empty array
    };

    const docRef = await addDoc(collection(db, "groups"), groupData);
    setGroups([...groups, { id: docRef.id, ...groupData }]);
    setNewGroupName("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // if (!newMessage.trim() || !user || !user.displayName || !currentGroup) return;
  
    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: {
          uid: user.uid,
          displayName: user.displayName,
        },
        groupId: currentGroup.id,
      });
  
      setNewMessage(""); // Reset newMessage after successfully sending
    } catch (error) {
      console.error("Error adding message to Firestore:", error);
    }
  };
  
  

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  const handleGroupClick = (group) => {
    setShowCommunityGroupList(false);
    setCurrentGroup(group);
    setShowChatContainer(true);
  };

  const handleBackToCommunityGroupList = () => {
    setShowCommunityGroupList(true);
    setCurrentGroup(null);
    setShowChatContainer(false);
  };

  return (
    <div className="forum-container" style= {{width: '8000px'}}>
      {showCommunityGroupList && (
        <>
         <img src={imageSrc} alt="Image" style={{ width: '30%', marginRight: '40px', margin:'10px' , borderRadius: '20px'}} />
          <div className="communities-list">
            <center><b><h2>Communities</h2></b></center>
            <ul>
              {communities.map((community) => (
                <li
                  key={community.id}
                  onClick={() => setCurrentCommunity(community)}
                  className={currentCommunity === community ? "selected" : ""}
                >
                  <div className="community-card">
                    <div className="community-name">{community.name}</div>
                    
                  </div>
                </li>
              ))}
            </ul>
            {user && (
              <div className="new">
                <input
                  type="text"
                  value={newCommunityName}
                  onChange={(e) => setNewCommunityName(e.target.value)}
                  placeholder="Enter community name"
                />
                <button onClick={handleCreateCommunity}>Create Community</button>
              </div>
            )}
          </div>
          
          <div className="groups-list">
                {currentCommunity && (
             <center> <div>
                <b><h1>{currentCommunity.name}</h1></b>
              </div></center>
            )}
           <center><b> <h2>Groups</h2></b></center>
            <ul>
              {user ? (
                <>
                 
                  <li>
                  
                    <ul>
                      {groups
                        .filter((group) => !group.members.includes(user.uid))
                        .map((group) => (
                          <li
                            key={group.id}
                            onClick={() => handleGroupClick(group)}
                            className={currentGroup === group ? "selected" : ""}
                          >
                            <div className="group-card">
                              <div className="group-name">{group.name}</div>
                              
                            </div>
                          </li>
                        ))}
                    </ul>
                  </li>
                </>
              ) : (
                groups.map((group) => (
                  <li
                    key={group.id}
                    onClick={() => handleGroupClick(group)}
                    className={currentGroup === group ? "selected" : ""}
                  >
                    <div className="group-card">
                      <div className="group-name">{group.name}</div>
                    </div>
                  </li>
                ))
              )}
            </ul>
            {user && (
              <div className="new">
                <input
                  type="text"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="Enter group name"
                />
                <button onClick={handleCreateGroup}>Create Group</button>
              </div>
            )}
          </div>
        </>
      )}
     
      {showChatContainer && (
        <div className="chat-container" style={{ width: "900px", marginLeft: "270px" }}>
          {currentGroup && (
            <>
            <div className="header" style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
              <center><b><h1>{` ${currentCommunity.name}`}</h1></b>
              <h2>{` ${currentGroup.name}`}</h2></center></div>
          
            <div className="messages-container">
              {messages[currentGroup.id] &&
                messages[currentGroup.id].map((message) => (
                  <div
                    key={message.id}
                    className={`message ${message.user.uid === user?.uid ? "own" : ""}`}
                  >
                    <div className="message-content">
                      <div className="message-sender">
                        {message.user.displayName} - {formatTimestamp(message.createdAt)}
                      </div>
                      <div className="message-text">{message.text}</div>
                    </div>
                  </div>
                ))}
            </div>
            {user && (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  style={{ width: "800px" }}
                />
                <button type="submit">Send</button>
                </form>
              )}
             
            </>
          )}
           <button onClick={handleBackToCommunityGroupList} style={{marginLeft: '10px'}}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Forum;
