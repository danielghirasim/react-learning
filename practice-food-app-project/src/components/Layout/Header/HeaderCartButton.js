import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

function HeaderCartButton(props) {
  const cartContext = useContext(CartContext);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartContext.items.reduce((accumulator, currValue) => {
          return accumulator + currValue.amount;
        }, 0)}
      </span>
    </button>
  );
}

export default HeaderCartButton;
