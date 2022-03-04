import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

function Cart(props) {
  const cartContext = useContext(CartContext);

  function cartItemAddHandler(item) {
    cartContext.addItem(item);
  }

  function cartItemRemoveHandler(id) {
    cartContext.removeItem(id);
  }

  const cartItems = cartContext.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={cartItemAddHandler.bind(null, { ...item, amount: 1 })}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartContext.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
