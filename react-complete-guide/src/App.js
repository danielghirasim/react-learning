import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Laptop',
    amount: 900,
    date: new Date(2022, 3, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // What is happening under the hood of JSX
  // return react.createElement(
  //   'div',
  //   {},
  //   react.createElement('h2', {}, 'Hello World'),
  //   react.createElement(Expenses, { items: expenses })
  // );
}

export default App;
