import React, { useContext } from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

function Cart(props) {
  const cartContext = useContext(CartContext);

  const cartItems = cartContext.items.map((item) => (
    <CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount} />
  ));
  return (
    <div className={classes.cart}>
      <ul className={classes['cart__items']}>{cartItems}</ul>
      <div className={classes['cart__info']}>
        <p className={classes['cart__total']}>
          <strong>Total Amount: ${`${cartContext.totalAmount}`}</strong>
        </p>
        <div className={classes['cart__buttons']}>
          {cartContext.items.length > 0 && (
            <button className={`${classes['cart__button']} ${classes['cart__button--alt']}`}>Order</button>
          )}
          <button onClick={props.onHide} className={classes['cart__button']}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
