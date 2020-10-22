import React, {useState} from 'react'
import styled from "styled-components"

const SDiv = styled.div`
display:flex;
flex-direction:column;
flex-wrap:nowrap;
justify-content:center;


  .disappear {
    display: none;
  }
 button{
  font-size:calc(2rem + 0.4vw);
  text-align:center;
  border:1px solid black;
  

}
button:hover{
  color:#0392A6;
}
button:active{
  border-radius:8%;
  transform:scale(.94);
} 
form{
  width:60%;
  margin:auto;
}
`


export default function EditTruckCard(props) {
  const [expandEdit, setExpandEdit] = useState(false)
  const {editSubmit} = props
  const [editValues, setEditValues] = useState({
    truckName: '',
    location: '',
    category: ''
  })

  const editTruck = e => {
    e.preventDefault()
    e.stopPropagation()
    setExpandEdit(!expandEdit)
  }
  
  const onChange = e => {
    const { name, value } = e.target
    setEditValues({
      ...editValues,
      [name]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    editSubmit(editValues)
  }

  return (

    <SDiv >
      <button className={expandEdit === true ? "disappear" : ''} onClick={editTruck}>Edit Truck</button>

      { expandEdit && 
        <>
          <form onSubmit={ onSubmit }>

            <input
              type="text"
              name="truckName"
              value={ editValues.truckName }
              onChange={ onChange }
            placeholder="Truck Name"
          />
            <input
              type="text"
              name="location"
              value={ editValues.location }
              onChange={ onChange }
            placeholder="Location"
          />
            <input
              type="text"
              name="category"
              value={ editValues.category }
              onChange={ onChange }
            placeholder="Category"
          />
        </form>
          <button>Confirm</button>
      </>
      }

      </SDiv>


  )
}
