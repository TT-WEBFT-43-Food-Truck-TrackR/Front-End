import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import styled from 'styled-components'

const initialFormValues = {
  truckName: '',
  location: '',
  category: '',
  menu: []
}

const initialMenuValues = {
  itemName: '',
  desc: '',
  price: ''
}

const StyledForm = styled.form`
display:flex;
box-shadow:0.5rem 1rem 0.8rem grey;
background-color:#4D4D4D;
flex-direction:column;
width:90%;
border:2px solid red;
justify-content:center;
margin:auto;
margin-bottom:2%;
font-size:2rem;
padding:1%;
align-items:center;
text-align:center;

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
.format{
  display:flex;
  align-items:center; 
  justify-content:center;
  width:100%;
  label{
  margin:1%;
  padding:.3%;
  }
  
}
input{
  padding:2%;
  
}
input:focus{
  box-shadow:0 0 0.5rem #0392A6;
  border:1px solid #0392A6;
  
}
@media(max-width:570px){
    .format{
      flex-direction:column;
    }
  } 
`
export default function AddTruckForm({ addTruck }) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [menuFormValues, setMenuFormValues] = useState(initialMenuValues)

  const onSubmit = e => {
    e.preventDefault()
    addTruck({ ...formValues, id: uuid() })
    setFormValues(initialFormValues)
  }

  const onChange = e => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name] : value
    })
  }

  const menuOnChange = e => {
    const { name, value } = e.target
    setMenuFormValues({
      ...menuFormValues,
      [name] : value
    })
  }

  const addMenuItem = e => {
    e.preventDefault()
    e.stopPropagation()
    setFormValues({
      ...formValues,
      menu: [...formValues.menu, { ...menuFormValues, id: uuid() }]
    })
    setMenuFormValues(initialMenuValues)
  }

  return (

    <StyledForm onSubmit={onSubmit}>
      <div className='format'>
        <label>
        <input
          type="text"
          name="truckName"
          value={ formValues.truckName }
          onChange={ onChange }
            placeholder="Truck Name"
        />
      </label> 
        <label>
        <input
          type="text"
          name="location"
          value={ formValues.location }
          onChange={ onChange }
            placeholder="Location"
        />
      </label> 
        <label>
        <input
          type="text"
          name="category"
          value={ formValues.category }
          onChange={ onChange }
            placeholder="Category"
        />
      </label> 

      </div>


      
      <button>Add Truck</button>

    </StyledForm>


  )
}
