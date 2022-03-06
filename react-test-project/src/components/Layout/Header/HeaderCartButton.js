import React, { useContext, useState, useEffect } from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';

function HeaderCartButton(props) {
  const cartContext = useContext(CartContext);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsAnimated(false);
    }, 250);

    return () => {
      setIsAnimated(true);
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  const buttonClasses = `${classes['header-button']} ${isAnimated && classes.bump}`;

  return (
    <button onClick={props.onShow} className={buttonClasses}>
      <ion-icon name="cart-outline"></ion-icon>
      <span>$ {cartContext.totalAmount}</span>
    </button>
  );
}

export default HeaderCartButton;
