import React , {useState} from 'react';
import UserCard from './components/Users/UserCard'
import './App.css';
import AddUser from './components/Users/AddUserForm';
import Wrapper from './components/wrapper/Wrapper';


function App() {
 const [usersList , setUsersList] = useState([])
 const addUserHandler=(userName , userAge)=>{
  setUsersList((prevUsersList)=>{return [...prevUsersList ,{id:Math.random() ,name:userName ,age:userAge}]})
 }
  return (
    <Wrapper>
     {/* <div className="App"> */}
      <AddUser  onAddUser={addUserHandler}/>
      <div>
        <UserCard  users={usersList}/>
      </div>
      
     {/* </div> */}
    </Wrapper>
  );
}

export default App;
