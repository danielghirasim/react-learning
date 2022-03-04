import React from 'react';
import classes from './Header.module.css';
import mealsImgs from '../../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


function Header(props) {
  
  return (
    <React.Fragment>
      <nav className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </nav>
      <div className={classes['main-image']}>
        <img src={mealsImgs} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
}

export default Header;
