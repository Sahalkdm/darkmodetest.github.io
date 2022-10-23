import React from "react";
import "./ButtonTest.css";
  
const ToggleSwitch = (props) => {

  const CheckHandler=(event)=>{
      props.onChangeHandler();
      //console.log(event.target.checked);
  }
  return (
    <div className="container">
      
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name='label1' id='label1' onChange={CheckHandler}/>
        <label className="label" htmlFor='label1'>
          <span className="inner"></span>
          <span className="switch"></span>
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;