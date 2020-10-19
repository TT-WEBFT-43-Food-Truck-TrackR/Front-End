import React from 'react'
import styled from "styled-components"

import "./Rating.css"

import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarSol } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons"

export default function Rating({ truck }) {
  const { id, name, rating, category } = truck

  const stars = []
  for (let i = 0; i < rating; i++) {
        stars.push(i)
  }
  const nulls = []
  for (let i = 0; i < 5 - rating; i++) {
    nulls.push(i)
  }
  return (
    <div className="rating">
      <div className="rating-truck-name">{ name }</div>
      <div className="rating-truck-category">{ category }</div>
      <div className="rating-stars">
        { stars.map((_, idx) => {
          return (
            <FAIcon key={ `${id}-star${idx}` } icon={ faStarSol } />
          )
        })}
        { nulls.map((_, idx) => {
          return (
            <FAIcon key={ `${id}-null${idx}` } icon={ faStarReg } />
          )
        })}
      </div>
    </div>
  )
}
