import React, { useRef, useState } from 'react'
import { v4 as uuid } from "uuid"
import styled from 'styled-components'

// { id: uuid(), truckName: "Mexican Truck Food", location: "Los Angeles, California", reviews: [
//   {id: uuid(), rating: 3, comment: "This food was good"},
//   {id: uuid(), rating: 2, comment: "This food was okay"},
//   {id: uuid(), rating: 1, comment: "This food was shit"}
// ], ratingAvg: 2, menu: [
//   {id: uuid(), itemName: "Chicken Quesadilla", desc: "grilled chicken quesadilla and pico de gallo", price: "12.99"},
//   {id: uuid(), itemName: "Chili Burrito", desc: "chicken buritto with chili and rice", price: "11.99"}
// ]}
const StyledCard = styled.div`
border:2px solid red;
box-shadow:0.5rem 1rem 0.8rem grey;
padding:1rem;
margin-left:auto;
margin-right:auto;
margin-bottom:3%;
width:90%;
height:30hv;
display:flex;
flex-direction:column;
background-color:#4D4D4D;
text-align:center;
button:hover{
  color:#0392A6;
}
button:active{
  border-radius:8%;
  transform:scale(.94);
}
.dissappear{
  display:none;
}
span:hover{
  color:#0392A6;
}
.toLeft{
  text-align:left;
  border-bottom: 1px dashed red;
  h3{
    font-size:calc(2rem + 0.4vw);
    color:#ACACAC;
  }
  p{
    font-size:calc(1.6rem + 0.4vw)
  }
}
h2{
  font-size:calc(3rem + 0.4vw);
}
h3{
  font-size:calc(2rem + 0.4vw);
}
`
const StyledForm = styled.form`
display:flex;
font-size:2rem;
border-top:1px solid black;
padding:1%;
align-items:center;
.alignForm{
  display:flex;
  align-items:center; 
  justify-content:center;
  width:100%;
}
label{
  
  margin:1%;
}
input{
  padding:2%;
}
input:focus{
  box-shadow:0 0 0.5rem #0392A6;
  border:1px solid #0392A6;
}
.submit{
  text-align:center;
}
button{
  font-size:calc(2rem + 0.4vw);
  text-align:center;
  border:1px solid black;

}
`
const StyledMenu = styled.div`

button{
  font-size:calc(2rem + 0.4vw);
  text-align:center;
  border:1px solid black;

}
`
const StyledReview = styled.div`
padding-top:2%;
margin-bottom:1%;
button{
  font-size:calc(2rem + 0.4vw);
  text-align:center;
  border:1px solid black;

}
`

export default function SearchResultCard({ result, addRating }) {
  const [expandReviews, setExpandReviews] = useState(false)
  const [expandMenu, setExpandMenu] = useState(false)
  const [expandForm, setExpandForm] = useState(false)
  const [expandThings, setExpandThings] = useState(false)
  const ratingRef = useRef()
  const commentRef = useRef()

  const onSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    const stars = ratingRef.current.value
    const feedback = commentRef.current.value
    addRating({ id: uuid(), rating: stars, comment: feedback }, result)
    ratingRef.current.value = ''
    commentRef.current.value = ''
  }
  const seeReviews = e => {
    setExpandReviews(!expandReviews)
  }

  const seeMenu = e => {
    setExpandMenu(!expandMenu)
  }
  const seeForm = e => {
    e.preventDefault()
    e.stopPropagation()
    setExpandForm(!expandForm)
  }

  const seeThings = e => {
    e.preventDefault()
    e.stopPropagation()
    setExpandThings(!expandThings)
  }
  return (
    <StyledCard>
      <div className="search-result-card-name"><h2>{result.name}</h2></div>
      <div className="search-result-card-location"><h3>{result.city}</h3></div>
      {/* <div className="search-result-card-rating-avg"><h3>Rating: {result.ratingAvg}</h3>
      </div> */}
      <div className={expandThings === true ? 'dissappear' : ''} onClick={seeThings}><span>v</span></div>
      {
        expandThings &&
        <div>
          <StyledMenu onClick={seeMenu}>
            <button>Menu</button>
            {
              expandMenu &&

              result.menu.map(item => {
                  return (
                    <div className="toLeft">
                      <div><h3>Dish</h3> <p>{item.itemName}</p></div>
                      <div><h3>Description</h3> <p>{item.desc}</p></div>
                    </div>
                  )
                })}
          </StyledMenu>
          <StyledReview onClick={seeReviews}>
            <button className='addReview'>Reviews</button>
            {
              expandReviews &&

              result.reviews.map(review => {
                  return (
                    <div className="toLeft">
                      <div><h3>Review</h3> <p>{review.comment}</p></div>
                      <div><h3>Rating</h3> <p>{review.rating}</p></div>
                    </div>
                  )
                })}
          </StyledReview>

          <StyledForm onSubmit={onSubmit}>
            <button className={expandForm === true ? 'dissappear' : ''} onClick={seeForm}>Add Review</button>
            {
              expandForm &&
              <div className='alignForm'>
                <label>
                  <input
                    type="number"
                      name="rating"
                    ref={ratingRef}
                    placeholder="Rating"
                    />
                  </label>
                <label>
                  <input
                    type="textarea"
                      name="comment"
                      ref={commentRef}
                    placeholder="Add Comment"
                    />
                  </label>
                <button className="submit">Submit</button>
              </div>
            }
          </StyledForm>
          </div>
      }

    </StyledCard>
  )

}

