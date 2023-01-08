import React, {useState, useRef} from "react";

import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value
    console.log(nameInputRef);

    if (enteredName.trim().length === 0 || enteredAge.trim() === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return;
    };
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      })
    }
    
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return(
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label id="username" htmlFor="username">Username</label>
        <input id="username" type="text" ref={nameInputRef}/>

        
        <label id="age" htmlFor="username">Age</label>
        <input id="age" type="number" ref={ageInputRef} />

        <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;