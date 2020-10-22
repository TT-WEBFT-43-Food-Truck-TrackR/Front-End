import React, { useState, useRef,useEffect } from 'react'
import SearchResultCard from '../SearchResultCard/SearchResultCard'
import { v4 as uuid } from "uuid"
import styled from 'styled-components'
import { fetchAllTrucks } from "../../actions";
import { connect } from "react-redux";

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


function Search(props) {
  const ref = useRef()
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
    props.allTrucks.filter(result => {
      return result.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  const addRating = (rating) => {
    const reviewObj = {rating: rating.rating, review: rating.comment, truck_id: rating.truck_id}
    // const newResult = {...result, reviews: [...result.reviews, rating]}
    // setResults([...results, {...result, reviews: [...result.reviews, rating]}])

  const addRating = (rating, result) => {
    const newResult = {...result, reviews: [...result.reviews, rating]}
    // setResults([...results, {...result, reviews: [...result.reviews, rating]}])
    // console.log({...result, reviews: [...result.reviews, rating]})
    // console.log(newResult)
  }



    
    axiosWithAuth().post(`trucks/${reviewObj.truck_id}/review`, reviewObj)
    .then(res => {
        console.log("POST REVIEW SUCCESS ===>", res.data)
        return(res.data)
    })
    .catch(err => console.log("POST REVIEW FAILURE ===>", err))
  }

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
          <SearchResultCard result={ result } addRating={ addRating } key={result.id}/>
        )
      })}

      </div>
    </StyledSearch>
  )
}

function mapStateToProps(state){
  return{
    allTrucks:state.allTrucks
  }
}

export default connect(mapStateToProps)(Search)
