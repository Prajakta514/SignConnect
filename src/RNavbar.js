import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app'; // Import the main Firebase module
import 'firebase/compat/firestore'; // Import Firestore module
import yellow_bg from './Images/yellow_bg.jpg';
import './Rnavbar.css';
// import { collection, addDoc } from 'firebase/firestore'; // Import Firestore collection and addDoc functions
import { db } from './firebase'; // Import your Firebase instance
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Import getDocs function

const RNavbar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [displayedMonth, setDisplayedMonth] = useState(new Date().getMonth());
  const [displayedYear, setDisplayedYear] = useState(new Date().getFullYear());

  const navbarStyle = {
    top:'0',
    backgroundColor: '#0d6efd',
    height: '100vh',
    width: '280px',
    position: 'fixed',
    right: 3,
    fontStyle:'bold',
    color: 'white',
    padding: '15px',
    fontFamily: 'Roboto',
    textAlign: 'center',
  };

  const dateStyle = {
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '5px',
    width: '2em',
  };
  
  const calendarStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridGap: '0px',
    alignItems: 'center',
    marginTop: '20px',
    width: 'calc(100% - 10px)',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const arrowIconStyle = {
    cursor: 'pointer',
    fontSize: '20px',
  };

  const taglineStyle = {
    fontSize: '18px',
    marginBottom: '10px',
    color: 'black',
    fontStyle: 'italic'
  };

  const eventsContainerStyle = {
    marginTop: '20px',
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(displayedMonth, displayedYear);
    const firstDayOfMonth = getFirstDayOfMonth(displayedMonth, displayedYear);
    const daysArray = [...Array(daysInMonth).keys()];
  
    return (
      <>
        <div style={headerStyle}>
          <div onClick={() => setDisplayedMonth(displayedMonth - 1)} style={arrowIconStyle}>
            &#9665;
          </div>
          <div>
            <h6>{new Date(displayedYear, displayedMonth).toLocaleString('default', { month: 'long' })}</h6>
            <p>{displayedYear}</p>
          </div>
          <div onClick={() => setDisplayedMonth(displayedMonth + 1)} style={arrowIconStyle}>
            &#9655;
          </div>
        </div>
        <div style={calendarStyle}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} style={{ ...dateStyle, textAlign: 'center' }}>
              <span>{day}</span>
            </div>
          ))}
          {[...Array(firstDayOfMonth).keys()].map((emptyDay) => (
            <div key={`empty-${emptyDay}`} style={{ ...dateStyle, visibility: 'hidden' }}>
              {''}
            </div>
          ))}
          {daysArray.map((day) => {
            const fullDate = new Date(displayedYear, displayedMonth, day + 1);

            const isEventScheduled = events.some((event) => {
              const eventDate = new Date(event.date);
              return (
                eventDate.getFullYear() === fullDate.getFullYear() &&
                eventDate.getMonth() === fullDate.getMonth() &&
                eventDate.getDate() === fullDate.getDate()
              );
            });

            return (
              <div
                key={day}
                style={{
                  ...dateStyle,
                  backgroundColor: isEventScheduled ? '#FFC107' : 'inherit',
                }}
                onClick={() => handleDateClick(day + 1)}
              >
                {day + 1}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const fetchEvents = async () => {
    try {
      const eventsSnapshot = await getDocs(collection(db, 'events'));
      const fetchedEvents = eventsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEvents(fetchedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = async () => {
    try {
      const selectedFullDate = new Date(displayedYear, displayedMonth, selectedDate);
      await addDoc(collection(db, 'events'), {
        date: selectedFullDate.toISOString(),
        description: newEvent,
      });
      setNewEvent('');
      fetchEvents();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div style={navbarStyle}>
      <br/><br/><br/><h3>Calendar</h3>
      <div style={taglineStyle} >
        Plan your events and stay organized with our interactive calendar!
      </div>
      
      {generateCalendar()}
     
      {selectedDate !== null && (
        <>
          <input
            type="text"
            value={newEvent}
            placeholder="Enter event description"
            onChange={(e) => setNewEvent(e.target.value)}
          />
          <button onClick={handleAddEvent} className='btn btn-danger'>Add Event</button>
        </>
      )}
      <hr/>
      <div style={eventsContainerStyle}>
        <h4>Upcoming Events:</h4>
        <div style={{ backgroundImage: `url(${yellow_bg})`, color: 'black' }}>
          {events.map((event) => (
            <div key={event.id}>{`${new Date(event.date).toLocaleDateString()}: ${event.description}`}<br/><hr/></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RNavbar;