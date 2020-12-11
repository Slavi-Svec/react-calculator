import React from 'react'
import './Button.css'

const Button = ({ onClick, content, type  }) => {
  return (
    <button
      className={`Button ${type}`}
      onClick={() => onClick(content)}
    >
      {content}
    </button>
  )
}

export default Button