import React, { useState } from 'react'
import { NavLink, Route, useHistory, useRouteMatch, useParams } from "react-router-dom"
import { v4 as uuid } from "uuid"
import styled from "styled-components"

import AddTruckForm from "../AddTruckForm/AddTruckForm"
import Truck from "../Truck/Truck"
import EditTruckCard from "./EditTruckCard"

export default function Dashboard() {
  const [user, setUser] = useState({ id: uuid(), username: "chrisg", email: "cg@cg.com", trucks: [
    { id: uuid(), truckName: "BBQ Truck Food", location: "Los Angeles, California", category: "BBQ", reviews: [
      {id: uuid(), rating: 3, comment: "This food was good"},
      {id: uuid(), rating: 2, comment: "This food was okay"},
      {id: uuid(), rating: 1, comment: "This food was shit"}
    ], ratingAvg: 2, menu: [
      {id: uuid(), itemName: "Grilled Chicken", desc: "grilled chicken on bun", price: "9.99"},
      {id: uuid(), itemName: "BBQ Chicken", desc: "bbq chicken and fries", price: "10.99"}
    ]},
    { id: uuid(), truckName: "Mexican Truck Food", location: "Los Angeles, California", category: "Mexican", reviews: [
      {id: uuid(), rating: 3, comment: "This food was good"},
      {id: uuid(), rating: 2, comment: "This food was okay"},
      {id: uuid(), rating: 1, comment: "This food was shit"}
    ], ratingAvg: 2, menu: [
      {id: uuid(), itemName: "Chicken Quesadilla", desc: "grilled chicken quesadilla and pico de gallo", price: "12.99"},
      {id: uuid(), itemName: "Chili Burrito", desc: "chicken buritto with chili and rice", price: "11.99"}
    ]}
  ]}) 
  const hist = useHistory()
  const { url } = useRouteMatch()
  const addTruck = details => {
    setUser({...user, trucks: [...user.trucks, details]})
  }

  const editSubmit = (formVals) => {
    //Axios put
  }

  return (
    <div className="user-dashboard">
      <div className="user-dashboard-username">Welcome back, { user.username }</div>
      <div className="user-dashboard-trucks">
      { user.trucks.map(truck => {
        return (
          <>
            <div className="user-dashboard-truck-name">Truck Name: { truck.truckName }</div>
            <div className="user-dashboard-truck-location">Location: { truck.location }</div>
            <div className="user-dashboard-truck-">Category: { truck.category }</div>
            <EditTruckCard editSubmit={editSubmit} />
            {/* <SDiv className={ expandEdit === true ? "disappear" : '' } onClick={ editTruck }>
              { expandEdit && 
                <form onSubmit={ onSubmit }>
                  Truck Name
                  <input
                    type="text"
                    name="truckName"
                    value={ editValues.truckName }
                    onChange={ onChange }
                  />
                  Location
                  <input
                    type="text"
                    name="location"
                    value={ editValues.location }
                    onChange={ onChange }
                  />
                  Category
                  <input
                    type="text"
                    name="category"
                    value={ editValues.category }
                    onChange={ onChange }
                  />
                  <button>Confirm</button>
                </form>
              }
            </SDiv> */}
          </>
        )
      })}
      </div>
      <div className="user-dash-board-add-truck-form">
        <h2>Add Truck</h2>
        <AddTruckForm addTruck={ addTruck } />
      </div>

      <Route path="/dashboard/:truckName">
        <Truck />
      </Route>
    </div>
  )
}
