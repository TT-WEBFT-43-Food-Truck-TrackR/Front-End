import React, { useState, useEffect } from 'react'
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

export default function EditTruckFrom() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [menuFormValues, setMenuFormValues] = useState(initialMenuValues)
  const [truck, setTruck] = useState({ id: uuid(), truckName: "BBQ Truck Food", location: "Los Angeles, California", category: "BBQ", reviews: [
      {id: uuid(), rating: 3, comment: "This food was good"},
      {id: uuid(), rating: 2, comment: "This food was okay"},
      {id: uuid(), rating: 1, comment: "This food was shit"}
    ], ratingAvg: 2, menu: [
      {id: uuid(), itemName: "Grilled Chicken", desc: "grilled chicken on bun", price: "9.99"},
      {id: uuid(), itemName: "BBQ Chicken", desc: "bbq chicken and fries", price: "10.99"}
    ]})

  const onSubmit = e => {
    e.preventDefault()
    // Object.entries(formValues).forEach((key, value) => {
    //   setTruck({...truck, key: value})
    // })
    // setTruck({...truck, [Object.keys(formValues)]: Object.values(formValues)})
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
