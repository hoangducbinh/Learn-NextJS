import React from 'react'
import LoginForm from './login-form'

export default function LoginPage() {
  return (
    <div>
    <h1  className="text-center font-semibold text-xl" >Sign In</h1>
    <div className="flex justify-center">
      <LoginForm />
    </div>
  </div>
  )
}
