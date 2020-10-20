import { faUserInjured } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useRef } from 'react'
import SearchResultCard from '../SearchResultCard/SearchResultCard'
import { v4 as uuid } from "uuid"

export default function Search() {
  const ref = useRef()
  const [results, setResults] = useState([
    { id: uuid(), truckName: "BBQ Truck Food", location: "Los Angeles, California", reviews: [
      {id: uuid(), rating: 3, comment: "This food was good"},
      {id: uuid(), rating: 2, comment: "This food was okay"},
      {id: uuid(), rating: 1, comment: "This food was shit"}
    ], ratingAvg: 2, menu: [
      {id: uuid(), itemName: "Grilled Chicken", desc: "grilled chicken on bun", price: "9.99"},
      {id: uuid(), itemName: "BBQ Chicken", desc: "bbq chicken and fries", price: "10.99"}
    ]},
    { id: uuid(), truckName: "Mexican Truck Food", location: "Los Angeles, California", reviews: [
      {id: uuid(), rating: 3, comment: "This food was good"},
      {id: uuid(), rating: 2, comment: "This food was okay"},
      {id: uuid(), rating: 1, comment: "This food was shit"}
    ], ratingAvg: 2, menu: [
      {id: uuid(), itemName: "Chicken Quesadilla", desc: "grilled chicken quesadilla and pico de gallo", price: "12.99"},
      {id: uuid(), itemName: "Chili Burrito", desc: "chicken buritto with chili and rice", price: "11.99"}
    ]}
  ])

  const onSubmit = e => {
    e.preventDefault()
    const search = ref.current.value
    setResults(results.filter(result => {
      return result.truckName.toLowerCase().includes(search.toLowerCase())
    }))
  }

  const addRating = (rating, result) => {
    const newResult = {...result, reviews: [...result.reviews, rating]}
    setResults([...results, {...result, reviews: [...result.reviews, rating]}])
    console.log({...result, reviews: [...result.reviews, rating]})
    console.log(newResult)
  }

  return (
    <div>
      <form onSubmit={ onSubmit }>
        <label>
          Search
          <input
            type="text"
            name="search"
            ref={ ref }
          />
        </label>
        <button>Submit</button>
      </form>
      { results.map(result => {
        return (
          <SearchResultCard result={ result } addRating={ addRating } />
        )
      })}
    </div>
  )
}
