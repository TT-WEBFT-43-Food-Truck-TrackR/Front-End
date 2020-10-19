import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuid } from "uuid"

import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';

// import LandingPage from "./components/LandingPage/LandingPage"
// import Header from "./components/Header/Header"
// import SignIn from "./components/SignIn/SignIn"
// import SignUp from "./components/SignUp/SignUp"
import Foodie from "./components/Foodie"
import Header from "./components/Header"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  const [users, setUsers] = useState([
    {
      id: uuid(),
      username: "chrisg",
      password: "123456",
      email: "cg@cg.com" 
    }
  ])

  return (
    <>
      <Header /> 

      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Foodie />
        </Route>
      </Switch>
      {/* <Switch>
        <Route path="/signup">
          <Header />      
          <SignUp />
        </Route>
        <Route path="/signin">
          <Header />      
          <SignIn />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>  */}
    </>
    // <>
    //   <CssBaseline />

      // <Switch>
      //   <Route path="/signup">
      //     <Header />      
      //     <SignUp />
      //   </Route>
      //   <Route path="/signin">
      //     <Header />      
      //     <SignIn />
      //   </Route>
      //   <Route path="/">
      //     <LandingPage />
      //   </Route>
      // </Switch> 
    // </>
  );
}

export default App;
