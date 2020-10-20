import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';

import LandingPage from "./components/LandingPage/LandingPage"
import Header from "./components/Header/Header"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/signup">
          <Header />      
          <SignUp />
        </Route>
        <Route path="/signin">
          <Header />      
          <SignIn />
        </Route>
        <Route path="/">
          <Header />
          <LandingPage />
        </Route>
      </Switch> 
    </>
  );
}

export default App;
