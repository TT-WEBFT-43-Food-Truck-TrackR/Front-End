import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom"

import { v4 as uuid } from "uuid"

import "./SignUpForm.css"

import * as yup from "yup";
import schema from "./schema"

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  terms: false
}

const initialErrorValues = {
  username: '',
  password: '',
  email: '',
  terms: ''
}

export default function SignUpForm({ submit }) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrorValues)
  const [disabled, setDisabled] = useState(true)

  const [users, setUsers] = useState([])
  
  const onChange = e => {
    const { name, value, checked, type } = e.target
    const newValue = type === "checkbox" ? checked : value

    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: ''
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: newValue
    })
  }
  
  const onSubmit = e => {
    e.preventDefault()
    const newUser = {
      id: uuid(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      email: formValues.email.trim(),
    }

    setUsers([
      ...users,
      newUser
    ])
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
      .catch(err => console.log(err))
  }, [formValues])

  return (

    <div className="signup-container">
      <form onSubmit={ onSubmit }>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={ formValues.username }
            onChange={ onChange }
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={ formValues.password }
            onChange={ onChange }
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={ formValues.email }
            onChange={ onChange }
          />
        </label>
        <label className="terms">
          <input
            type="checkbox"
            name="terms"
            checked={ formValues.terms }
            onChange={ onChange }
          />
          <span className="checkmark"></span>
          I agree to the <a href="https://www.facebook.com/terms.php">Terms of Service</a>
        </label>
        <button disabled={ disabled }>Sign Up</button>
      </form>
      <Link to="/login/signin">Already a member?</Link>
    </div>
  )
}
