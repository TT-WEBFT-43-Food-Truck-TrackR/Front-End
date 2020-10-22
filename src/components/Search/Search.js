// import { faUserInjured } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useRef, useEffect } from 'react'
import SearchResultCard from '../SearchResultCard/SearchResultCard'
import { v4 as uuid } from "uuid"
import styled from 'styled-components'

import { axiosWithAuth } from "../../utils/axiosWithAuth"

const StyledSearch = styled.div`
display:flex;
flex-direction:column;
font-size:3.6rem;
line-height:3rem;
text-align:center;
width:100%;
button{
  font-size:calc(2rem + 0.4vw);
  text-align:center;
}
button:hover{
  color:#0392A6;
}
button:active{
  border-radius:8%;
  transform:scale(.94);
}
.searchBar{
  margin:2%;
  padding:1%;
  width:30%
}
input:focus{
  box-shadow:0 0 0.5rem #0392A6;
  border:1px solid #0392A6;
}
form{
  align-items:center;
  width:100%;
}

.cardContainer{
  display:flex;
  width:100%;
  flex-direction:column;
}

`


export default function Search() {
  const ref = useRef()
  // const [results, setResults] = useState([
  //   { id: uuid(), truckName: "BBQ Truck Food", location: "Los Angeles, California", reviews: [
  //     {id: uuid(), rating: 3, comment: "This food was good"},
  //     {id: uuid(), rating: 2, comment: "This food was okay"},
  //     {id: uuid(), rating: 1, comment: "This food was shit"}
  //   ], ratingAvg: 2, menu: [
  //     {id: uuid(), itemName: "Grilled Chicken", desc: "grilled chicken on bun", price: "9.99"},
  //     {id: uuid(), itemName: "BBQ Chicken", desc: "bbq chicken and fries", price: "10.99"}
  //   ]},
  //   { id: uuid(), truckName: "Mexican Truck Food", location: "Los Angeles, California", reviews: [
  //     {id: uuid(), rating: 3, comment: "This food was good"},
  //     {id: uuid(), rating: 2, comment: "This food was okay"},
  //     {id: uuid(), rating: 1, comment: "This food was shit"}
  //   ], ratingAvg: 2, menu: [
  //     {id: uuid(), itemName: "Chicken Quesadilla", desc: "grilled chicken quesadilla and pico de gallo", price: "12.99"},
  //     {id: uuid(), itemName: "Chili Burrito", desc: "chicken buritto with chili and rice", price: "11.99"}
  //   ]}
  // ])
  const [results, setResults] = useState([])

  useEffect(() => {
    axiosWithAuth().get('trucks')
    .then(res => {
        console.log("GET TRUCKS SUCCESS ===>", res.data)
        setResults(res.data)
    })
    .catch(err => console.log("GET TRUCKS FAILURE ===>", err))
  }, [])

  const onSubmit = e => {
    e.preventDefault()
    const search = ref.current.value
    setResults(results.filter(result => {
      if (result.name === null) {
        return false
      }
      return result.name.toLowerCase().includes(search.toLowerCase())
    }))
  }
// const index = this.state.employees.findIndex(emp => emp.id === employee.id),
//           employees = [...this.state.employees] // important to create a copy, otherwise you'll modify state outside of setState call
//     employees[index] = employee;
//     this.setState({employees});
  // const updateReview = (id, review) => {
  //   const idx = results.findIndex(truck => truck.id === id)
  //   const newResults = [...results]
  //   newResults[idx].reviews = [...results[idx].reviews, review]
  //   console.log(newResults)
  //   setResults(newResults)
  //   // console.log(idx)
  // }

  const addRating = (rating) => {
    const reviewObj = {rating: rating.rating, review: rating.comment, truck_id: rating.truck_id}
    // const newResult = {...result, reviews: [...result.reviews, rating]}
    // setResults([...results, {...result, reviews: [...result.reviews, rating]}])

    axiosWithAuth().post(`trucks/${reviewObj.truck_id}/review`, reviewObj)
    .then(res => {
        console.log("POST REVIEW SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("POST REVIEW FAILURE ===>", err))
    // console.log({...result, reviews: [...result.reviews, rating]})
    // console.log(newResult)
    // updateReview(rating.truck_id, rating)
  }


  // useEffect(() => {
  //   axiosWithAuth().get('trucks/4')
  //     .then(resp => {
  //       console.log(resp)
  //     })
  // }, [])

  return (
    <StyledSearch>
      <form onSubmit={ onSubmit }>
        <label>
          <input className="searchBar"
            type="text"
            name="search"
            placeholder="Search..."
            ref={ ref }
          />
        </label>
        <button>Submit</button>
      </form>
      <div className='cardContainer'>
        { results.map(result => {
          return (
            <SearchResultCard result={ result } addRating={ addRating } />
          )
        })}
      </div>
    </StyledSearch>
  )
}
