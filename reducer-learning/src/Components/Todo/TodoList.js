import styles from './TodoList.module.css';
import React from 'react';
import Todo from './Todo';

function TodoList(props) {

  return (
    <div className={styles.todo}>
      <ul className={styles['todo__list']}>
        {props.data.map((todo) => (
          <Todo
            data={todo}
            id={todo.id}
            key={todo.id}
            completed={todo.completed}
            toggleHandler={props.onToggleHandler}
            removeHandler={props.onRemoveHandler}
          >
            {todo.name}
          </Todo>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
