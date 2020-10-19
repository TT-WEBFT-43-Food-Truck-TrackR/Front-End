import React from 'react'
import { NavLink } from "react-router-dom"

import "./Header.css"

import headerBanner from "../../assets/headerImg.png"

export default function Header() {
  return (
    <div className="header-container">
      <img src={headerBanner} href="food truck" />
      <h1>Food Truck TrackR</h1>
      <div className="nav-header">
        <NavLink
          activeClassName="active"
          className="header-nav-link left"
          to="/signup"
        >Sign Up</NavLink>
        <NavLink
          activeClassName="active"
          className="header-nav-link right"
          to="/signin"
        >Sign In</NavLink>
      </div>
    </div>
  )
}
