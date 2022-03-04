import React, { useState } from 'react';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CardProvider from './store/CartProvider';

function App() {
  const [isCartHidden, setIsCartHidden] = useState(false);

  function hideCartHandler() {
    setIsCartHidden(false);
  }

  function showCartHandler() {
    setIsCartHidden(true);
  }

  return (
    <CardProvider>
      {isCartHidden && <Cart onHideCart={hideCartHandler} onShowCart={showCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
