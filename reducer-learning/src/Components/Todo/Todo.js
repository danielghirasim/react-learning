import styles from './Todo.module.css';
import Button from '../Button/Button';

function Todo(props) {
  function removeHandler() {
    props.removeHandler(props.id);
  }

  function toggleHandler() {
    props.toggleHandler(props.id, props.completed);
  }

  return (
    <li className={`${styles['todo__item']} ${props.completed && styles.completed}`}>
      {props.children}
      <Button onClick={toggleHandler}>Toggle</Button>
      <Button onClick={removeHandler}>Remove</Button>
    </li>
  );
}

export default Todo;
