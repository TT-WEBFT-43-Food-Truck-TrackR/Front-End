import React from 'react'
import { NavLink } from "react-router-dom"
import { v4 as uuid } from "uuid"
import headerImg from "../../assets/headerImg.png"
import Header from "../Header/Header"
import MainFooter from "../MainFooter/MainFooter"
import Rating from "../Rating/Rating"
import Search from "../Search/Search"



export default function LandingPage() {
  return (
    <div>
      <Search />
      <MainFooter />
    </div>
  )
}
