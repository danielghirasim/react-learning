import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CardProvider';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function showCartHandler(){
    setModalVisible(true)
  }

  function hideCartHandler(){
    setModalVisible(false)
  }
  return (
    <CartProvider>
      {modalVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
