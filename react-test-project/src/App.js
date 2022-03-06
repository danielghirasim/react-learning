import { useState} from 'react';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartModalIsVisible, setCartModalIsVisible] = useState(false);

  function onCartShowHandler() {
    setCartModalIsVisible(true);
  }

  function onCartHideHandler() {
    setCartModalIsVisible(false);
  }

  return (
    <CartProvider>
      <Header onShow={onCartShowHandler} />
      <Meals />
      {cartModalIsVisible && (
        <Modal onShow={onCartShowHandler} onHide={onCartHideHandler}>
          <Cart onHide={onCartHideHandler} />
        </Modal>
      )}
    </CartProvider>
  );
}

export default App;
