import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

function HeaderCartButton(props) {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;