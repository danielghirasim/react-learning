import { useState, React } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(inputName, inputAge) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: inputName, age: inputAge, id: uuidv4() }];
    });
    console.log(usersList);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
