import React from 'react'
import { NavLink } from "react-router-dom"
import { v4 as uuid } from "uuid"

import headerImg from "../../assets/headerImg.png"

import "./LandingPage.css"

import Header from "../Header/Header"
import MainFooter from "../MainFooter/MainFooter"
import Rating from "../Rating/Rating"
import Search from "../Search/Search"

const foodTrucks = [
  {
    id: uuid(),
    name: "Food Truck 1",
    rating: 3,
    category: "Mexican"
  },
  {
    id: uuid(),
    name: "Food Truck 2",
    rating: 1,
    category: "BBQ"
  },
  {
    id: uuid(),
    name: "Food Truck 3",
    rating: 5,
    category: "Thai"
  },
  {
    id: uuid(),
    name: "Food Truck 4",
    rating: 4,
    category: "Breakfast"
  }
]

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* <Header /> */}
      {/* <h1>Food Truck TrackR</h1> 
      <img src={ headerImg } alt="food truck" />
      <div className="landing-page-nav">
        <NavLink
          className="nav-link top"
          to="/signup"
        >Sign Up</NavLink>
        <NavLink
          className="nav-link bottom"
          to="/signin"
        >Sign In</NavLink>
      </div> */}
      <Search />
      <MainFooter />
      { foodTrucks.map(truck => {
        return (
          <Rating key={ truck.id } truck={ truck } />
        )
      })}
    </div>
  )
}
