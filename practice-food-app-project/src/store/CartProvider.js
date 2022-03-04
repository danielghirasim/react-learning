import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(prevState, action) {
  if (action.type === 'ADD') {
    const updatedTotalAmount = prevState.totalAmount + action.item.amount * action.item.price;
    const existingCartItemIndex = prevState.items.findIndex((item) => item.id === action.item.id);
    const existingCartItem = prevState.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      let updatedItem;
      updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount };
      updatedItems = [...prevState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...prevState.items, action.item];
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    let updatedItems;
    const existingCartItemIndex = prevState.items.findIndex((item) => item.id === action.item.id);
    
  }

  return defaultCartState;
}

function CardProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  function addItemToCartHandler(item) {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    });
  }

  function removeItemFromCartHandler(id) {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CardProvider;
