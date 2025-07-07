import React from 'react'
import "./Button.css"
const Button = ({children, type="button", attributes,  className, onClick}) => {
  return (
    <button type={type} className={`btn ${className}`} {...attributes} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button