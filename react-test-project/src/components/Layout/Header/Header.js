import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <section className={classes.header}>
      <nav className={classes.navigation}>
        <h2 className={classes['navigation__logo']}>Italiano Restaurante</h2>
        <HeaderCartButton onShow={props.onShow} />
      </nav>
    </section>
  );
}

export default Header;
