import React from "react"
import "./Button.css"

const Button = ({ handleButtonPress, content, type  }) => {
  console.log(type)
  return (
    <button
      className={`Button ${type}`}
      onClick={() => handleButtonPress}
    >
      {content}
    </button>
  )
}

export default Button