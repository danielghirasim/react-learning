import { useState } from 'react';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import AddUserList from './Components/AddUser/AddUserList/AddUserList';
import Overlay from './Components/UI/Overlay/Overlay';
import Modal from './Components/UI/Modal/Modal';

const DUMMY_DATA = [
  { name: 'Max', age: 31, id: 1 },
  { name: 'Daniel', age: 28, id: 2 },
];

function App() {
  const [users, setUsers] = useState(DUMMY_DATA);
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const [modalText, setModalText] = useState({ header: '', description: '' });

  function addUserHandler(userData) {
    if (userData.name.length < 6) {
      setModalText({ header: 'Invalid username', description: 'Username is under 6 characters.' });
      setDisplayOverlay(true);
    }

    if (userData.age < 18) {
      setModalText({ header: 'Invalid age', description: 'You must be atleast 18 years old.' });
      setDisplayOverlay(true);
    }

    setUsers((prevState) => {
      return [...prevState, userData];
    });
  }

  function removeUserHandler(id) {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  }

  function modalButtonHandler() {
    setDisplayOverlay(false);
  }

  return (
    <div className="container">
      <AddUser handler={addUserHandler} />
      <AddUserList data={users} removeHandler={removeUserHandler}></AddUserList>
      {displayOverlay && (
        <Overlay>
          <Modal header={modalText.header} description={modalText.description} handler={modalButtonHandler}></Modal>
        </Overlay>
      )}
    </div>
  );
}

export default App;
