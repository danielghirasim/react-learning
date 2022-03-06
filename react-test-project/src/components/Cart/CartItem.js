import React, { useContext } from 'react';
import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';

function CartItem(props) {
  const cartContext = useContext(CartContext);

  function addItemHandler() {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: +props.price.toFixed(2),
    });
  }

  function removeItemHandler() {
    cartContext.removeItem(props.id);
  }

  return (
    <li key={props.id} className={classes['cart-item']}>
      <div className={classes['cart-item__info']}>
        <h2 className={classes['cart-item__title']}>
          {props.name} x {props.amount}
        </h2>
        <p className={classes['cart-item__price']}>${props.price}</p>
      </div>
      <div className={classes['cart-item__buttons']}>
        <button className={classes.button} onClick={addItemHandler}>
          +
        </button>
        <button className={classes.button} onClick={removeItemHandler}>
          -
        </button>
      </div>
    </li>
  );
}

export default CartItem;
