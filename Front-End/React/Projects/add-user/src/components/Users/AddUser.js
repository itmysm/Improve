import React from "react";

import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser = props => {
  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return(
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
      <label id="username" htmlFor="username">Username</label>
      <input id="username" type="text" />

      
      <label id="age" htmlFor="username">Age</label>
      <input id="age" type="number" />

      <Button type="submit">Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser;