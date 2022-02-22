import './App.css';
import { useReducer, useState } from 'react';
import TodoList from './Components/Todo/TodoList';
import TodoInput from './Components/Todo/TodoInput';

const DUMMY_DATA = [
  { name: 'Make a todo app', id: 1, completed: false },
  { name: 'Create styles for todo app', id: 2, completed: true },
];

function reducer(todos, action) {
  if (action.type === 'todoRemove') {
    return [...todos.filter((todo) => todo.id !== action.payload.id)];
  }

  if (action.type === 'todoToggle') {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: action.payload.toggleStatus };
      }
      return todo;
    });
  }

  if (action.type === 'todoAdd') {
    console.log(action.payload)
    return [...todos, action.payload];
  }
}

function App() {
  const [userInput, setUserInput] = useState('');
  const [todos, dispatch] = useReducer(reducer, [...DUMMY_DATA]);

  function onToggleHandler(id, toggleStatus) {
    dispatch({ type: 'todoToggle', payload: { id: id, toggleStatus: !toggleStatus } });
  }

  function onRemoveHandler(id) {
    dispatch({ type: 'todoRemove', payload: { id: id } });
  }

  function changeHandler(e) {
    setUserInput(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    dispatch({ type: 'todoAdd', payload: { id: Date.now(), name: userInput, completed: false } });
    setUserInput('');
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoInput onChange={changeHandler} onSubmit={formSubmitHandler} value={userInput} />
      <TodoList data={todos} onToggleHandler={onToggleHandler} onRemoveHandler={onRemoveHandler} />
    </div>
  );
}

export default App;
