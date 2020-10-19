import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';

import LandingPage from "./components/LandingPage/LandingPage"
import Header from "./components/Header/Header"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"

function App() {
  return (
    <>
      <CssBaseline />

      <Switch>
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
      </Switch> 
    </>
  );
}

export default App;
