import styles from './TodoInput.module.css';

function TodoInput(props) {
  return (
    <form onSubmit={props.onSubmit} className={styles.form}>
      <label htmlFor="name">Todo Name</label>
      <input type="text" value={props.value} onChange={props.onChange}></input>
    </form>
  );
}

export default TodoInput;
