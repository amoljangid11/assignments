import React from 'react'

const Button = ({ onClick, label = 'Click me'}) => { // if you want to display the props value then you need to use the { }
  return (
    <button onClick={onClick} data-testid="button">
        {label}
    </button>
  )
}

export default Button
