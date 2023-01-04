import { useState } from 'react'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle('Changed!!');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />

      <div className='expense-item__description'>
        <h1 className=''>{title}</h1>
        <div className='expense-item__price'>{props.expense.amount}$</div>
      </div>

      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpenseItem;