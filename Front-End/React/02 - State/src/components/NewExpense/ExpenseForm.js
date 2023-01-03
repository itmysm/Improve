import "./ExpenseForm.css";

const ExpenseForm = () => {

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input type="date" min="2019-01-01" max="2023-12-31" />
        </div>

        <button className="new-expense__actions" type="submit">Add Actions</button>
      </div>
    </form>
  )
}

export default ExpenseForm;