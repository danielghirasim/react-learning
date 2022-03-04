import React, { useState, useRef } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1) return setAmountIsValid(false);
    setAmountIsValid(true);

    props.onAddToCart(enteredAmount);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.input.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please Enter a valid amount</p>}
    </form>
  );
}

export default MealItemForm;
