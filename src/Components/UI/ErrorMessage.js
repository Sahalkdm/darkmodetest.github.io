import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './ErrorMessage.module.css';
function ErrorMessage(props) {
  const state=props.mode;
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConform}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
            <div className={`${classes['content']} ${!state && classes.invalid}`}><p>{props.message}</p></div>
        <footer className={`${classes['actions']} ${!state && classes.invalid}`}>
            <Button onClick={props.onConform}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorMessage
