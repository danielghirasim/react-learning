import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem(props) {
  const cartContext = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const currentItem = {
    id: props.id,
    name: props.name,
    price: props.price,
  };

  function addToCartHandler(enteredAmount) {
    cartContext.addItem({ ...currentItem, amount: enteredAmount });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
