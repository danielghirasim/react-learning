import React, { useContext } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import CartContext from '../../store/cart-context';

const DUMMY_DATA = [
  {
    id: 'a1',
    url: '../../assets/pizza.jpg',
    description: 'Delicious pizza made with local ingredients',
    name: 'Pizza',
    price: 17.99,
  },
  {
    id: 'a2',
    url: '../../assets/burger.jpg',
    description: "A burger like you've never eaten before",
    name: 'Burger',
    price: 15.99,
  },
  {
    id: 'a3',
    url: '../../assets/pasta.jpg',
    description: 'Pasta made in our restaurant by the best chef in the city',
    name: 'Pasta',
    price: 13.99,
  },
  {
    id: 'a4',
    url: '../../assets/pasta.jpg',
    description: 'Not your usual friend chicken',
    name: 'Fried Chicken',
    price: 14.5,
  },
  {
    id: 'a5',
    url: '../../assets/pasta.jpg',
    description: "The mac and the chesse that you've been dreaming about",
    name: 'Mac and Chesse',
    price: 12.15,
  },
];

function AvailableMeals(props) {
  const cartContext = useContext(CartContext);

  const mealItems = DUMMY_DATA.map((item) => {
    return (
      <MealItem
        id={item.id}
        key={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
        onAdd={cartContext.addItem}
      />
    );
  });
  return (
    <Card className={classes['available-meals']}>
      <ul className={classes['available-meals__list']}>{mealItems}</ul>
    </Card>
  );
}

export default AvailableMeals;
