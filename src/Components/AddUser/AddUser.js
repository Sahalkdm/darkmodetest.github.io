import React,{useState,useRef} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorMessage from '../UI/ErrorMessage';
import classes from './input.module.css'
function AddUser(props) {
    /*const [inUserName,setInUserName]=useState('');
    const [inAge,setInAge]=useState('');
    const [error,setError]=useState();

    const AddUserHandler =(event)=>{
        event.preventDefault();
        if(inUserName.trim().length===0 || inAge.trim().length===0){
          setError({
            title:'Error Found',
            message:'Pls Enter Correct Name and Age',
          })
          return;
        }

        if(inAge<1){
          setError({
            title:'Error Found',
            message:'Pls Enter Correct Age',
          })
          return;
        }
        props.AddUser(inUserName,inAge);
        setInUserName('');
        setInAge('');
    };

    const InUsernameHandler=(event)=>{
        setInUserName(event.target.value);
    };
    const InAgeHandler=(event)=>{
        setInAge(event.target.value);
    };

    const ErrorHandler=()=>{
      setError(null);
    }*/

    const inputNameRef=useRef();
    const inputAgeRef=useRef();
    const [error,setError]=useState();
    const AddUserHandler =(event)=>{
      event.preventDefault();
      console.log(inputNameRef)
      const inputName=inputNameRef.current.value;
      const inputAge=inputAgeRef.current.value;
    
      if(inputName.trim().length===0 || inputAge.trim().length===0){
        setError({
          title:'Error Found',
          message:'Pls Enter Correct Name and Age',
        })
        return;
      }

      if(+inputAge<1){
        setError({
          title:'Error Found',
          message:'Pls Enter Correct Age',
        })
        return;
      }
      
      props.Adduser(inputName,inputAge);
      //setInUserName('');
      //setInAge('');
      inputNameRef.current.value='';
      inputAgeRef.current.value='';
  };

  /*const InUsernameHandler=(event)=>{
      setInUserName(event.target.value);
  };
  const InAgeHandler=(event)=>{
      setInAge(event.target.value);
  };
*/
  const ErrorHandler=()=>{
    setError(null);
  }
  const state=props.mode;
  return (
    <div>
      {error && <ErrorMessage title={error.title} message={error.message} onConform={ErrorHandler} mode={state}></ErrorMessage>}
    <Card className={`${classes['input']} ${!state && classes.invalid}`}>
    <form onSubmit={AddUserHandler}>
      <label htmlFor='username'>UserName</label>
      <input type="text" id='username' /*value={inUserName} onChange={InUsernameHandler}*/ ref={inputNameRef}></input>
      <label htmlFor='age'>Age</label>
      <input type="number" id='age' /*value={inAge} onChange={InAgeHandler}*/ ref={inputAgeRef}></input>
      <Button type='submit' /*onClick={AddUserHandler}*/>Add User</Button>
    </form>
    </Card>
    </div>
  )
}

export default AddUser
