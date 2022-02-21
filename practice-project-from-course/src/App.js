import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import { v4 as uuidv4 } from 'uuid';
import Wrapper from './Components/Helpers/Wrapper';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(inputName, inputAge) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: inputName, age: inputAge, id: uuidv4() }];
    });
    console.log(usersList);
  }

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
