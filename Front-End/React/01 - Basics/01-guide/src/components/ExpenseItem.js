import './ExpenseItem.css'

function ExpenseItem (props) {
    return (
        <div className='expense-item'>
            <div>
                {props.expense.date.toISOString()}
            </div>

            <div className='expense-item__description'>
                <h1>{props.expense.title}</h1>
                <div className='expense-item__price'>{props.expense.amount}$</div>
            </div>
        </div>
    )
}

export default ExpenseItem;