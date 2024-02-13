// import React, { useState, useEffect } from 'react';
// // import firebase from 'firebase/app';
// import 'firebase/firestore';
// import yellow_bg from './Images/yellow_bg.jpg'
// // import * as firebase from 'firebase/app'; // Import all named exports
// // import 'firestore/firestore';
// import 'firebase/compat/firestore';
// import { firestore } from 'firebase/compat/firestore'; 
// import { db } from './firebase';
// import { collection, doc, getDoc, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';


// const RNavbar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [events, setEvents] = useState([]);
//   const [newEvent, setNewEvent] = useState('');
//   const [displayedMonth, setDisplayedMonth] = useState(new Date().getMonth());
//   const [displayedYear, setDisplayedYear] = useState(new Date().getFullYear());

//   const navbarStyle = {
//     backgroundColor: '#007BFF',
//     height: '100vh',
//     width: '280px', // Adjusted width
//     position: 'fixed',
//     right: 3,

//     color: 'white',
//     padding: '15px',
//     fontFamily: 'Arial, sans-serif',
//     textAlign: 'center',
//   };

 
//   const dateStyle = {
//     cursor: 'pointer',
//     // margin: '5px',
//     padding: '5px',
//     borderRadius: '5px',
//     width: '2em', // Adjust the width as needed
//   };
  
//   const calendarStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(7, 1fr)', // Adjusted to show 7 columns
//     gridGap: '0px',
//     alignItems: 'center',
//     marginTop: '20px',
//     width: 'calc(100% - 10px)', // Adjusted to ensure full width, considering margins
//   };

//   const headerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//   };

//   const arrowIconStyle = {
//     cursor: 'pointer',
//     fontSize: '20px',
//   };

//   const taglineStyle = {
//     fontSize: '18px',
//     marginBottom: '10px',
//     color: 'black',
    
//     fontStyle: 'italic'
//   };

//   const eventsContainerStyle = {
//     marginTop: '20px',
//   };

//   const getDaysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (month, year) => {
//     return new Date(year, month, 1).getDay();
//   };


//   const generateCalendar = () => {
//     const daysInMonth = getDaysInMonth(displayedMonth, displayedYear);
//     const firstDayOfMonth = getFirstDayOfMonth(displayedMonth, displayedYear);
//     const daysArray = [...Array(daysInMonth).keys()];
  
//     return (
//       <>
//         <div style={headerStyle}>
//           <div onClick={() => setDisplayedMonth(displayedMonth - 1)} style={arrowIconStyle}>
//             &#9665; {/* Left arrow icon */}
//           </div>
//           <div>
//             <h6>{new Date(displayedYear, displayedMonth).toLocaleString('default', { month: 'long' })}</h6>
//             <p>{displayedYear}</p>
//           </div>
//           <div onClick={() => setDisplayedMonth(displayedMonth + 1)} style={arrowIconStyle}>
//             &#9655; {/* Right arrow icon */}
//           </div>
//         </div>
//         <div style={calendarStyle}>
//           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
//             <div key={index} style={{ ...dateStyle, textAlign: 'center' }}>
//               <span>{day}</span>
//             </div>
//           ))}
//           {[...Array(firstDayOfMonth).keys()].map((emptyDay) => (
//             <div key={`empty-${emptyDay}`} style={{ ...dateStyle, visibility: 'hidden' }}>
//               {''}
//             </div>
//           ))}
//           {daysArray.map((day) => {
//   const fullDate = new Date(displayedYear, displayedMonth, day + 1);

//   const isEventScheduled = events.some((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === fullDate.getFullYear() &&
//       eventDate.getMonth() === fullDate.getMonth() &&
//       eventDate.getDate() === fullDate.getDate()
//     );
//   });

//   return (
//     <div
//       key={day}
//       style={{
//         ...dateStyle,
//         backgroundColor: isEventScheduled ? '#FFC107' : 'inherit',
//       }}
//       onClick={() => handleDateClick(day + 1)}
//     >
//       {day + 1}
//     </div>
//   );
// })}


//         </div>
//       </>
//     );
//   };
  
  
//   const fetchEvents = async () => {
//     try {
//       const db = firebase.firestore();
//       const eventsRef = db.collection('events');
//       const eventsSnapshot = await eventsRef.get();
//       const fetchedEvents = eventsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setEvents(fetchedEvents);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const handleAddEvent = async () => {
//   try {
//     const db = firebase.firestore();
//     const selectedFullDate = new Date(displayedYear, displayedMonth, selectedDate);
//     await db.collection('events').add({
//       date: selectedFullDate.toISOString(),
//       description: newEvent,
//     });
//     setNewEvent('');
//     fetchEvents();
//   } catch (error) {
//     console.error('Error adding event:', error);
//   }
// };

  

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   return (
//     <div style={navbarStyle}>
//       <h3>Calendar</h3>
//        <div style={taglineStyle} >
//         Plan your events and stay organized with our interactive calendar!
//       </div>
      
//       {generateCalendar()}
     
//       {selectedDate !== null && (
//         <>
//           <input
//             type="text"
//             value={newEvent}
//             placeholder="Enter event description"
//             onChange={(e) => setNewEvent(e.target.value)}
//           />
//           <button onClick={handleAddEvent} className='btn btn-danger'>Add Event</button>
//         </>
//       )}
//       <hr/>
//       <div style={eventsContainerStyle}>
//         <h4>Upcoming Events:</h4>
//         <div style={{ backgroundImage: `url(${yellow_bg})`,color: 'black' }}>
//         {events.map((event) => (
//           <div key={event.id}>{`${new Date(event.date).toLocaleDateString()}: ${event.description}`}<br/><hr/></div>
//         ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RNavbar;


import React from 'react'

export default function RNavbar() {
  return (
    <div>
      a
    </div>
  )
}

