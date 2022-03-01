import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function showCartHandler(){
    setModalVisible(true)
  }

  function hideCartHandler(){
    setModalVisible(false)
  }
  return (
    <Fragment>
      {modalVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
