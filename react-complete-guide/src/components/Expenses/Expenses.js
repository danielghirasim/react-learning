import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2022);
  const filteredExpenses = props.items.filter((item) => item.date.getFullYear() === filteredYear);

  function changeYearHandler(selectedYear) {
    setFilteredYear(+selectedYear);
  }

  let expensesContent = <p>No Expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => createExpenseItem(expense));
  }

  function createExpenseItem(expense) {
    return (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
    );
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={changeYearHandler} selected={filteredYear} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
