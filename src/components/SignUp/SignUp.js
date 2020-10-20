import React, { useState } from 'react'
import { Link } from "react-router-dom"

import "./SignUp.css"

import SignUpForm from '../SignUpForm/SignUpForm'

export default function SignUp() {
  const [users, setUsers] = useState([])
  
  const submit = newUser => {
    setUsers([
      ...users,
      newUser
    ])
  }

  return (
    <div className="signup-container">
      <SignUpForm submit={submit} />
      <Link to="/login/signin">Already a member?</Link>
    </div>
  )
}
