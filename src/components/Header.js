import React from 'react'
import { Route, NavLink, Switch } from "react-router-dom"

import Signup from "./Signup"
import Login from "./Login"

import headerBanner from "../assets/headerImg.png"

export default function Header() {
  return (
    <div className="header-container">
      <img src={headerBanner} href="food truck" />
      <h1>Food Truck TrackR</h1>
      <div className="nav-header">
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
      </div>
    </div>
  )
}
