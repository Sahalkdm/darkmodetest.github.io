import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserLists from './Components/AddUser/UserLists';
import ToggleSwitch from './Components/ButtonTest';
import styles from './App.module.css'

function App() {

  const [usersInfo,setUsersInfo]=useState([]);
  const [state,setState]=useState(true);
  const [color,setColor]=useState('#000000');
  const PrintUsersInfo=(uname,uage)=>{
    
    setUsersInfo((prevUsersinfo)=>{
    return [...prevUsersinfo, {name:uname,age:uage, id:Math.random().toString}]
  })
 }
 function setBodyColor({color}) {
  document.documentElement.style.setProperty('--bodyColor', color)
}
 const Statefn=()=>{
      setState(!state);
      //setBodyColor({color: "#000000"})
      setColor(!state? "#000000": "#ffffff")
      console.log(color);
      setBodyColor({color: color})
}

  console.log(state);
  return (
    <div className={`${styles['app']} ${!state && styles.invalid}`}>
      <ToggleSwitch onChangeHandler={Statefn}/>
      <AddUser Adduser={PrintUsersInfo} mode={state}/>
      <UserLists users={usersInfo} mode={state}/>
    </div>
  );
}

export default App;
