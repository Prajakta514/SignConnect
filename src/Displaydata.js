import React from 'react'
import { useState } from 'react';
import User from './Hospitalapi';
import UserCard from './Displaycard';
import Filter from './Filter';
import Displaycard from './Displaycard';

const uniqueList = [
  ...new Set(
    User.map((curElem)=>{
      return curElem.location
    })
  ),
  "All",
]
const Displaydata = () => {
  const [data,setData]=useState(User)
  const [userList,setUserList] = useState(uniqueList)

  const filterItem = (location)=>{
    if (location ==="All"){
      setData(User)
      return ;
    }
    const updateList = User.filter((curElem)=>{
      return curElem.location === location
    })

    setData(updateList)

  }

  const displayCardStyle = {
    maxWidth: '1900px', // You can adjust the width as needed
    width: '50%', // Ensure the component takes full width
    // margin: '0 auto',
    margin: '10px',
    
  
  };
  return (
    <>
    <div>
    <Filter filterItem={filterItem} userList={userList}></Filter>
    <Displaycard data={data}></Displaycard></div>
    
    </>
  )
}

export default Displaydata;