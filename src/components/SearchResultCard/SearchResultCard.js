import React, { useRef } from 'react'
import { v4 as uuid } from "uuid"

// { id: uuid(), truckName: "Mexican Truck Food", location: "Los Angeles, California", reviews: [
//   {id: uuid(), rating: 3, comment: "This food was good"},
//   {id: uuid(), rating: 2, comment: "This food was okay"},
//   {id: uuid(), rating: 1, comment: "This food was shit"}
// ], ratingAvg: 2, menu: [
//   {id: uuid(), itemName: "Chicken Quesadilla", desc: "grilled chicken quesadilla and pico de gallo", price: "12.99"},
//   {id: uuid(), itemName: "Chili Burrito", desc: "chicken buritto with chili and rice", price: "11.99"}
// ]}

export default function SearchResultCard({ result, addRating }) {
  const ratingRef = useRef()
  const commentRef = useRef()

  const onSubmit = e => {
    e.preventDefault()
    const stars = ratingRef.current.value
    const feedback = commentRef.current.value
    addRating({ id: uuid(), rating: stars, comment: feedback }, result)
    ratingRef.current.value = ''
    commentRef.current.value = ''
  }

  return (
    <div className="search-result-card">
      <div className="search-result-card-name">Name of Truck: { result.truckName }</div>
      <div className="search-result-card-location">Location: { result.location }</div>
      <div className="search-result-card-reviews">
        Reviews:
        { result.reviews.map(review => {
          return (
            <div className="search-result-card-review">
              <div className="search-result-card-review-comment">Review: { review.comment }</div>
              <div className="search-result-card-review-rating">Rating: { review.rating }</div>
            </div>
          )
        })}
      </div>
      <div className="search-result-card-rating-avg">Average Rating: { result.ratingAvg }</div>
      <div className="search-result-card-menu">
        Menu:
        { result.menu.map(item => {
          return (
            <div className="search-result-card-menu-item">
              <div className="search-result-card-menu-item-name">Dish: { item.itemName }</div>
              <div className="search-result-card-menu-item-desc">Description: { item.desc }</div>
            </div>
          )
        })}
      </div>
      <form onSubmit={ onSubmit }>
        <label>
          Rating:
          <input
            type="text"
            name="rating"
            ref={ ratingRef }
          />
        </label>
        <label>
          Comment:
          <input
            type="text"
            name="comment"
            ref={ commentRef }
          />
        </label>
        <button>Add Review</button>
      </form>
    </div>
  )
}
