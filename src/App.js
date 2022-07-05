import React , {useState} from 'react';
import UserCard from './components/Users/UserCard'
import './App.css';
import AddUser from './components/Users/AddUserForm';


function App() {
 const [usersList , setUsersList] = useState([])
 const addUserHandler=(userName , userAge)=>{
  setUsersList((prevUsersList)=>{return [...prevUsersList ,{id:Math.random() ,name:userName ,age:userAge}]})
 }
  return (
    <div className="App">
      <AddUser  onAddUser={addUserHandler}/>
      <div>
        <UserCard  users={usersList}/>
      </div>
      
    </div>
  );
}

export default App;
