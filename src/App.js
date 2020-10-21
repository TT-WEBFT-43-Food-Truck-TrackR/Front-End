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
import {PrivateRoute} from  './utils/PrivateRoute'
import styled from "styled-components"

const StyledPage = styled.div`
max-width:1650px;
margin:auto;
`

function App() {
  return (
    <StyledPage>
      <CssBaseline />

      <Switch>
        <PrivateRoute path="/dashboard" component={<Dashboard/>}>
      <Header />
          <Dashboard />
        </PrivateRoute>
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
    </StyledPage>
  );
}

export default App;
