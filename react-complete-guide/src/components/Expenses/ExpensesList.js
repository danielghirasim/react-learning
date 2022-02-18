import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found.</h2>;
  }

  function createExpenseItem(expense) {
    return (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
    );
  }

  return <ul className="expenses-list">{props.expenses.map((expense) => createExpenseItem(expense))}</ul>;
}

export default ExpensesList;
