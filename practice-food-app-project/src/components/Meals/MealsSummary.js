import React from 'react';
import classes from './MealsSummary.module.css';
import Card from '../UI/Card';

function MealsSummary() {
  return (
    <Card className={classes.meals}>
      <h2 className={classes['meals__title']}>Delicious Food, Delivered To You</h2>
      <p className={classes['meals__description']}>
        Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at
        home.
      </p>
      <p className={classes['meals__description']}>
        All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
      </p>
    </Card>
  );
}

export default MealsSummary;
