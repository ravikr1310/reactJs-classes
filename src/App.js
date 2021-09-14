// import logo from './logo.svg';
import './App.css';
import Child from './child';
import React, { useState } from 'react';
import MyButton from './MyButton';
import Dismiss from './10Sep2021/Dismiss';
import LocalStorage from './13Sep/LocalStorage';

function App() {
  const [name, setName] = useState();
  const [parentdata, setParentdata] = useState("Ravi kumar Singh");
  const [lsName, setLsName] = useState(null);
  const [lsMyName, setLsMyName] = useState(null)

  const fullName = (data) => {
    setName(data)
  }

  const Login = () => {
    console.log("Login");
  }

  const Logout = () => {
    console.log("Logout");
  }



  return (
    <div className="App">
      <header className="App-header">
        <h5>{name}</h5>
        <h1>{fullName}</h1>
        <Child childName={parentdata} fullName={fullName} />
        <MyButton name="Login" click={() => Login()} />
        <MyButton name="Logout" click={() => Logout()} />
        <Dismiss myFunction={(isVisible, setIsVisibleFun) => {
          return (
            <>
              <h1>{isVisible ? "Liked" : "Not Liked"}</h1>
              <button onClick={() => setIsVisibleFun(isVisible ? false : true)} >Submit</button>
            </>
          )
        }} />
        <hr />
        <LocalStorage render={(saveStorage, loadStorage, removeItem) => {
          return (
            <div>
              <input type="text" onChange={(e) => setLsName(e.target.value)} />
              <button onClick={() => saveStorage('name', lsName)}>Save</button>
              <h1>{lsMyName}</h1>
              <button onClick={() => setLsMyName(loadStorage('name'))}>Update</button>
            </div>)
        }} />
      </header>
    </div>
  );
}

export default App;
