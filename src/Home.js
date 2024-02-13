import React, {useState, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import VideocamIcon from '@material-ui/icons/Videocam';

const Home=()=> {
    const [value,setValue]=useState();
    const navigate=useNavigate()
    const handleJoinRoom= useCallback( ()=>{
        navigate(`/room/${value}`)
    },[navigate,value] )

  return (
    <div >
      <center>
        <br/>  <VideocamIcon fontSize="large" style={{ marginRight: '5px', color:'red' }} />
        <h3>Communicate Quickely & Effectively</h3><br/>
      <input 
      value={value} 
      onChange={(e)=> setValue(e.target.value)} 
      type="text" placeholder="Enter Room Code"   />

      <button className='btn btn-primary' onClick={handleJoinRoom} style={{marginLeft: '5px'}}>Join</button><br/><br/>
      </center>
    </div>
  )
};
export default Home;
