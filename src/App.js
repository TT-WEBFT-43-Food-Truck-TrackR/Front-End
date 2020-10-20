import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';

import LandingPage from "./components/LandingPage/LandingPage"
import Header from "./components/Header/Header"

import SignInForm from "./components/SignInForm/SignInForm"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
  return (
    <>
      <CssBaseline />

      <Switch>
        <Route path="/dashboard">
          <Header />
          <Dashboard />
        </Route>
        <Route path="/signup">
          <Header />      
          <SignUpForm />
        </Route>
        <Route path="/signin">
          <Header />      
          <SignInForm />
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
