import styles from './AddUserInput.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import { useState } from 'react';

function AddUserInput(props) {
  const [input, setInput] = useState({ name: '', age: '', id: Math.random() });

  function inputUserHandler(event) {
    setInput((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  }

  function inputAgeHandler(event) {
    setInput((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setInput((prevState) => {
      return { ...prevState, id: Math.random() };
    });
    props.handler(input);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles['form__section']}>
          <label className={styles['form__label']} htmlFor="username">
            Username
          </label>
          <input
            className={styles['form__input']}
            onChange={inputUserHandler}
            name="username"
            type="text"
            placeholder="Enter a user"
            value={input.name}
          />
        </div>
        <div className={styles['form__section']}>
          <label className={styles['form__label']} htmlFor="age">
            Age
          </label>
          <input
            className={styles['form__input']}
            onChange={inputAgeHandler}
            name="age"
            type="number"
            placeholder="Enter age"
            value={input.age}
          />
        </div>

        <div className={styles['form__container']}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
}

export default AddUserInput;
