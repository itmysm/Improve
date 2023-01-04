import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /* const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('') */

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value)

    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    }) */

    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value}
    }) // best practice
  }

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value)
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    })
  }

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value)
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = userInput

    props.onSaveExpenseData(expenseData)

    // reset form after submit
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })


  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input type="date" min="2019-01-01" max="2023-12-31" value={userInput.enteredDate} onChange={dateChangeHandler}/>
        </div>

        <button className="new-expense__actions" type="submit">Add Actions</button>
      </div>
    </form>
  )
}

export default ExpenseForm;