import React from 'react';
import classes from './Meals.module.css';
import AvailableMeals from './AvailableMeals';

function Meals(props) {
  return (
    <section className={classes.meals}>
      <AvailableMeals />
    </section>
  );
}

export default Meals;
