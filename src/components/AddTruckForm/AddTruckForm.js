import React, { useState } from 'react'
import { v4 as uuid } from "uuid"

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
    <form onSubmit={ onSubmit }>
      <label>
        Truck Name
        <input
          type="text"
          name="truckName"
          value={ formValues.truckName }
          onChange={ onChange }
        />
      </label> 
      <label>
        Location
        <input
          type="text"
          name="location"
          value={ formValues.location }
          onChange={ onChange }
        />
      </label> 
      <label>
        Category
        <input
          type="text"
          name="category"
          value={ formValues.category }
          onChange={ onChange }
        />
      </label> 
      <form onSubmit={ addMenuItem }>
        <label>
          Item Name
          <input
            type="text"
            name="itemName"
            value={ menuFormValues.itemName }
            onChange={ menuOnChange }
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="desc"
            value={ menuFormValues.desc }
            onChange={ menuOnChange }
          />
        </label>
        <label>
          Price
          <input
            type="text"
            name="price"
            value={ menuFormValues.price }
            onChange={ menuOnChange }
          />
          <button>Add Menu Item</button>
        </label>
      </form>
      <button>Add Truck</button>
    </form>
  )
}
