import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user_Name, user_Age) =>{
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: user_Name, age: user_Age, id:Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
};

export default App;
