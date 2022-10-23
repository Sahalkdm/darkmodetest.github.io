import React from 'react'
import Card from '../UI/Card';
import classes from './UsersList.module.css'
function UserLists(props) {
  const state=props.mode;
  return (
    <Card className={`${classes['users']} ${!state && classes.invalid}`}>
        <ul>
        {props.users.map(event=>(
            <li key={event.id}>{event.name}  {event.age}</li>
        ))}
      </ul>
    </Card>
  )
}

export default UserLists
