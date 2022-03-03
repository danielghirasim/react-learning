import React, { useContext } from 'react';
import CartProvider from '../../store/cart-context';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';

function Cart(props) {
  const cartContext = useContext(CartProvider);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  function cartItemAddHandler(item) {
    cartContext.addItem(item);
  }
  function cartItemRemoveHandler(id) {
    cartContext.removeItem(id);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, { ...item, amount: 1 })}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
