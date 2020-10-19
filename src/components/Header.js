import React from 'react'
import { Route, NavLink, Switch } from "react-router-dom"
import styled from 'styled-components'
import headerBanner from "../assets/headerImg.png"

import Signup from "./Signup"
import Login from "./Login"

const StyledHeader = styled.div`
display:flex;
width:100%;
align-items:center;
background-color:#4D4D4D;
color:#ACACAC;
max-height:10vh;
h1{
  padding:.5%;
  font-size:calc(3rem + 0.4vw);
  margin-right:auto;
}
`
const StyledNav = styled.div`
display:flex;
width:30%;
justify-content: flex-end;

a{
  text-decoration:none;
  font-size:calc(1.6rem + 0.4vw);
  margin: 2%; 
  padding:1%;
  color:#A8A7A7;
  }
  a:hover{
    transform:scale(1.2);
    transition:all 0.2s ease-in-out;
    color:#0392A6;
}
`
const StyledImg = styled.img`
  width:100%;
  max-height:65vh;
`

export default function Header() {
  return (
    <>
      <StyledHeader>
      <h1>Food Truck TrackR</h1>
        <StyledNav>
        <NavLink
          activeClassName="active"
          className="nav-link left"
          to="/signup"
          >Sign Up</NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link right"
          to="/login"
        >Sign In</NavLink>
        </StyledNav>
      </StyledHeader>
      <StyledImg src={headerBanner} href="food truck" />
    </>
  )
}
