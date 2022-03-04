import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
  const cartContext = useContext(CartContext);

  const price = `${props.price.toFixed(2)}`;

  function addToCartHandler(enteredAmount) {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: price,
      amount: enteredAmount,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>${price}</p>
      </div>
      <MealItemForm
        input={{
          type: 'number',
          min: '1',
          max: '10',
          name: props.name,
          id: props.id,
        }}
        onAddToCart={addToCartHandler}
      />
    </li>
  );
}

export default MealItem;
