import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />

      <div className='expense-item__description'>
        <h1>{props.expense.title}</h1>
        <div className='expense-item__price'>{props.expense.amount}$</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;