import React, { useState,useEffect } from 'react'
import { NavLink, Route, useHistory, useRouteMatch, useParams } from "react-router-dom"
import { v4 as uuid } from "uuid"

import styled from 'styled-components'

import {connect} from 'react-redux'
import { fetchAllTrucks,fetchMyTrucks,setTruck,setOperator } from "../../actions";


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

function Dashboard(props) {


  useEffect(() => {
    props.dispatch(fetchAllTrucks())
    props.dispatch(setOperator())
    props.dispatch(fetchMyTrucks(props.operator.operator_id))

  },[])
  

  const editSubmit = (formVals) => {
    //Axios put
  }

  return (
    <StyledPage>
      <div className="user-dashboard-username"><h1>Welcome back!</h1></div>
      <div>
      { props.operator.trucks.length >1 &&
      
      props.operator.trucks.map(truck => {
        console.log(props.operator.trucks)
        return (

        <div className="user-dash-board-add-truck-form">
          <AddTruckForm />
          <StyledTrucks>
            <div className="user-dashboard-truck-name"><h2>{truck.truckName}</h2></div>
            <div className="user-dashboard-truck-location"><h3>{truck.location}</h3></div>
            <div className="user-dashboard-truck-"><h4>Catagory: {truck.category}</h4></div>
            <EditTruckCard editSubmit={ editSubmit } />
          </StyledTrucks>
        </div>
        )
      })}
      </div>

      <Route path="/dashboard/:truckName">
        <Truck />
      </Route>
    </StyledPage>
  )
}

function mapStateToProps(state){
  return {
    trucks:state.trucks,
    operator:state.operator
  }
}


export default connect(mapStateToProps)(Dashboard)