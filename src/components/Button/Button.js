import React from 'react'
import './Button.scss'
// import Resume from '../../file/resume.pdf';

const Button = ({ text }) => {
  return (
    <a className="button" download>
      {text}
    </a>
  )
}

export default Button
