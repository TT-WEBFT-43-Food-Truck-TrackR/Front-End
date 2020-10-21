import React, { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid"
import { useParams } from "react-router-dom"

export default function Truck() {
  const [truck, setTruck] = useState({ id: uuid(), truckName: "BBQ Truck Food", location: "Los Angeles, California", category: "BBQ", reviews: [
      {id: uuid(), rating: 3, comment: "This food was good"},
      {id: uuid(), rating: 2, comment: "This food was okay"},
      {id: uuid(), rating: 1, comment: "This food was shit"}
    ], ratingAvg: 2, menu: [
      {id: uuid(), itemName: "Grilled Chicken", desc: "grilled chicken on bun", price: "9.99"},
      {id: uuid(), itemName: "BBQ Chicken", desc: "bbq chicken and fries", price: "10.99"}
    ]})
  // const params = useParams()

  useEffect(() => {
    // use effect to get truck details with params.whatever
  })

  return (
    <div className="dashboard-truck">
      Truck
      <div className="dashboard-truck-name">{ truck.truckName }</div> 
      <div className="dashboard-truck-location">{ truck.location }</div>
      <div className="dashboard-truck-category">{ truck.category }</div>
      { truck.menu.map(item => {
        return (
          <div className="dashboard-truck-menu">
            <div className="dashboard-truck-menu-item-name">{ item.itemName }</div>
            <div className="dashboard-truck-menu-item-desc">{ item.desc }</div>
            <div className="dashboard-truck-menu-item-price">{ item.price }</div>
          </div>
        )
      })}
    </div>
  )
}
