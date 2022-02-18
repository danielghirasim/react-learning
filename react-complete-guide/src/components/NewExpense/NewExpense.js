import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} cancelEditing={stopEditingHandler} />}

      {/* Ternary operator, doesn't look that clean as shortcircuiting */}
      {/* {isEditing ? (
        <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onEdit={setIsEditing} />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )} */}
    </div>
  );
}

export default NewExpense;
