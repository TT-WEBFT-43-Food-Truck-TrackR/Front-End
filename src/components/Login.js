import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import schema from "./schemaSignin"
import { useHistory } from "react-router-dom"

const initialFormValues = {
  username: '',
  password: '',
}

const initialErrorValues = {
  username: '',
  password: '',
}

export default function Login() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "chrisg",
      password: "123456",
      email: "cg@cg.com" 
    }
  ])

  const hist = useHistory()

  const submit = user => {
    console.log(user) 
  }

  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrorValues)
  const [disabled, setDisabled] = useState(true)

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

    hist.push(user.username)
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
      .catch(err => console.log(err))
  }, [formValues])
  
  return (
    <>
      <div className="signin-container">
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
      </div>
    </>
  )
}
