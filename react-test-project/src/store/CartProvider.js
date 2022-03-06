import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(prevState, action) {
  let newItems;
  let newTotalAmount;

  if (action.type === 'ADD') {
    const itemExists = prevState.items.some((item) => item.name === action.item.name);

    if (!itemExists) {
      newItems = [...prevState.items, action.item];
    }

    if (itemExists) {
      const itemIndex = prevState.items.findIndex((item) => item.id === action.item.id);
      newItems = [...prevState.items];
      newItems[itemIndex].amount += 1;
    }

    newTotalAmount = newItems
      .map((item) => item.price * item.amount)
      .reduce((prevValue, currValue) => prevValue + currValue, 0)
      .toFixed(2);
  }

  if (action.type === 'REMOVE') {
    const itemIndex = prevState.items.findIndex((item) => item.id === action.id);
    newItems = [...prevState.items];

    if (newItems[itemIndex].amount > 1) {
      newItems[itemIndex].amount -= 1;
    } else {
      newItems = prevState.items.filter((item) => item.id !== action.id);
    }

    newTotalAmount = newItems
      .map((item) => item.price * item.amount)
      .reduce((prevValue, currValue) => prevValue + currValue, 0)
      .toFixed(2);
  }

  return {
    items: newItems,
    totalAmount: newTotalAmount,
  };
}

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  function addCartItemHandler(item) {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    });
  }

  function removeItemCartHandler(id) {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeItemCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartProvider;
