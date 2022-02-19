import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & .form-control--invalid input {
//     border-color: red;
//     background-color: #ff4c4c4e;
//   }

//   & .form-control--invalid label {
//     color: red;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Using styled components*/}
      {/* <FormControl className={`${!isValid && 'form-control--invalid'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl> */}

      {/* Using Default CSS Files */}
      {/* <div className={`form-control ${!isValid && 'form-control--invalid'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
       */}

      {/* Using CSS Modules */}
      <div className={`${styles['form-control']} ${!isValid && styles['form-control--invalid']}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
