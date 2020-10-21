import React, {useState} from 'react'
import styled from "styled-components"

const SDiv = styled.div`
  .disappear {
    display: none;
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
    <>
      <button onClick={ editTruck }>Edit Truck</button>
      <SDiv className={ expandEdit === true ? "disappear" : '' } onClick={editTruck}>
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
      </SDiv>
    </>
  )
}
