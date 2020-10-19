import React, { useState } from 'react'
import { Link } from "react-router-dom"

import "./SignIn.css"

import Axios from "axios"

import SignInForm from "../SignInForm/SignInForm"

export default function SignIn() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "chrisg",
      password: "123456",
      email: "cg@cg.com" 
    }
  ])

  const submit = user => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === user.username && users[i].password === user.password) {
        return true
      }
    }
    return false
  }

  return (
    <div className="signin-container">
      <SignInForm submit={submit} />
      <Link to="/login/signup">Not a member?</Link>
    </div>
  )
}
