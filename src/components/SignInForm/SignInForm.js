import React, { useState, useEffect } from 'react'

import { Link, useHistory, useRouteMatch } from "react-router-dom"
import styled from 'styled-components'
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

const StyledForm = styled.form`
display:flex;
box-shadow:0.5rem 1rem 0.8rem grey;
background-color:#4D4D4D;
width:50%;
border:2px solid red;
margin:1% auto;
flex-direction:column;
font-size:2rem;
padding:1%;
align-items:center;
text-align:center;
label{
  
  margin:1%;
  padding:.3%
}
button{
  font-size:calc(2rem + 0.4vw);
  text-align:center;
  margin-top:.5%;
  border:1px solid black;

}
button:hover{
  color:#0392A6;
}
button:active{
  border-radius:8%;
  transform:scale(.94);
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
`

export default function SignInForm({ submit }) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrorValues)
  const [disabled, setDisabled] = useState(true)
  const { url } = useRouteMatch()
  const hist = useHistory()

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "chrisg",
      password: "123456",
      email: "cg@cg.com" 
    }
  ])


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

    hist.push(users[0].id)
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
      .catch(err => console.log(err))
  }, [formValues])
  
  return (

    <div className="signin-container">
      <StyledForm onSubmit={onSubmit}>
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
        <Link to="/login/signup">Not a member?</Link>
        <button disabled={ disabled }>Sign In</button>
      </StyledForm>

    </div>
  )
}
