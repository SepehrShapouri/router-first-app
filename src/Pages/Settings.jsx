import React from 'react'
import { Link } from 'react-router-dom'

function Settings() {
  return (
    <div>
        <h1>Welcome to the settings section!</h1>
        <p>here you can make changes to your profile and all kinds of those stuff!</p>
        <span>Back to <Link to="/">Home</Link></span>
    </div>
  )
}

export default Settings