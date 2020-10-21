import React, { useState } from 'react'
import { NavLink, Route, useHistory, useRouteMatch, useParams } from "react-router-dom"
import { v4 as uuid } from "uuid"

import styled from 'styled-components'




import AddTruckForm from "../AddTruckForm/AddTruckForm"
import Truck from "../Truck/Truck"
import EditTruckCard from "./EditTruckCard"



const StyledTrucks = styled.div`
display:flex;
box-shadow:0.5rem 1rem 0.8rem grey;
background-color:#4D4D4D;
width:50%;
border:2px solid red;
margin:1% auto;
flex-direction:column;
font-size:2rem;
padding:1%;
align-items:center;
text-align:center;
button:hover{
  color:#0392A6;
}
button:active{
  border-radius:8%;
  transform:scale(.94);
}
button{
  border:1px solid black;
  font-size:calc(2rem + 0.4vw);
  text-align:center;
}
h2{
  font-size:calc(3rem + 0.4vw);
}
h3{
  font-size:calc(2rem + 0.4vw);
}
h4{
  font-size:calc(1.7rem + 0.4vw);
}
`
const StyledPage = styled.div`
text-align:center; 
h1{
  font-size:5rem;
}
`

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
    <StyledPage>
      <div className="user-dashboard-username"><h1>Welcome back, {user.username}</h1></div>
      <div>
      { user.trucks.map(truck => {
        return (

          <StyledTrucks>
            <div className="user-dashboard-truck-name"><h2>{truck.truckName}</h2></div>
            <div className="user-dashboard-truck-location"><h3>{truck.location}</h3></div>
            <div className="user-dashboard-truck-"><h4>Catagory: {truck.category}</h4></div>
            <button onClick={() => editTruck(truck.truckName) }>Edit Truck</button>
          </StyledTrucks>

          

        )
      })}
      </div>
      <div className="user-dash-board-add-truck-form">
        <AddTruckForm addTruck={ addTruck } />
      </div>

      <Route path="/dashboard/:truckName">
        <Truck />
      </Route>
    </StyledPage>
  )
}
