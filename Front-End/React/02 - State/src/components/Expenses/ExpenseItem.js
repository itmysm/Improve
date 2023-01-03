import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log('clicked!!!');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />

      <div className='expense-item__description'>
        <h1 className=''>{props.expense.title}</h1>
        <div className='expense-item__price'>{props.expense.amount}$</div>
      </div>

      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpenseItem;