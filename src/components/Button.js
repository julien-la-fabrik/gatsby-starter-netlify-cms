import React from 'react'
import {Link} from 'gatsby'

export const Button = ({ button }) => {
  const btnClass= button.style ? "uk-button "+button.style.class : 'uk-button uk-button-default';
  return (
    <Link className={btnClass} to={button.link}>{button.label}</Link>
  )
}
export default Button
