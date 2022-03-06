import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

function HeaderCartButton(props) {
  const cartContext = useContext(CartContext);

  return (
    <button onClick={props.onShow} className={classes['header-button']}>
      <ion-icon name="cart-outline"></ion-icon>
      <span>$ {cartContext.totalAmount}</span>
    </button>
  );
}

export default HeaderCartButton;
