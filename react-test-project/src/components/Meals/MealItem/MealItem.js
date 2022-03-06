import React from 'react';
import classes from './MealItem.module.css';
import Card from '../../UI/Card';

function MealItem(props) {
  function addItemHandler() {
    props.onAdd({
      id: props.id,
      name: props.name,
      amount: 1,
      price: +props.price.toFixed(2),
    });
  }

  return (
    <Card id={props.id} className={classes.meal}>
      <div className={classes['meal__left-box']}>
        <h2>{props.name}</h2>
        <p className={classes['meal__description']}>{props.description}</p>
        <p className={classes['meal__price']}>${props.price.toFixed(2)}</p>
      </div>
      <div className={classes['meal__right-box']}>
        <button onClick={addItemHandler}>Add to Cart</button>
      </div>
    </Card>
  );
}

export default MealItem;
