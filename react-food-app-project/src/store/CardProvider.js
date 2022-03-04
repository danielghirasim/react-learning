import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(prevState, action) {
  if (action.type === 'ADD') {
    // Update prevState in a immutable way with Array.concat()
    const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = prevState.items.findIndex((item) => item.id === action.item.id);
    const existingCartItem = prevState.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...prevState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = prevState.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    let updatedItems = [...prevState.items];
    const itemIndex = updatedItems.findIndex((item) => item.id === action.id);

    updatedItems[itemIndex].amount > 1
      ? (updatedItems[itemIndex].amount -= 1)
      : (updatedItems = updatedItems.filter((item) => item.id !== action.id));

    const updatedTotalAmount = updatedItems
      .map((item) => item.amount * item.price)
      .reduce((partialSum, a) => partialSum + a, 0);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
}

function CartProvider(props) {
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

export default CartProvider;
