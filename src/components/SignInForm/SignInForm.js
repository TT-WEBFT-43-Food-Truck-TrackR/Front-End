import React, { useState, useEffect } from 'react'
import { useHistory, useRouteMatch } from "react-router-dom"

import "./SignInForm.css"

import * as yup from "yup";
import schema from "./schema"

const initialFormValues = {
  username: '',
  password: '',
}

const initialErrorValues = {
  username: '',
  password: '',
}

export default function SignInForm({ submit }) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrorValues)
  const [disabled, setDisabled] = useState(true)
  const { url } = useRouteMatch()
  const hist = useHistory()

  const onChange = e => {
    const { name, value } = e.target

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
      [name]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    const user = {
      username: formValues.username,
      password: formValues.password
    }
    if (submit(user)) {
      console.log("test")
      hist.push(`${user.username}`)
    }
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
      .catch(err => console.log(err))
  }, [formValues])
  
  return (
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
      <button disabled={ disabled }>Sign In</button>
    </form>
  )
}
