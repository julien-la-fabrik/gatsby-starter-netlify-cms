import React from 'react'
import {Link} from 'gatsby'
function ukScroll(path){
  path=path||false;
  if(path){
  if(path.indexOf("#")===0){
    return {'uk-scroll':'true'};
  }
}
  return {}
}
export const Button = ({ button }) => {
  const btnClass= button.style ? "uk-button "+button.style.class : 'uk-button uk-button-default';
  return (
    <Link className={btnClass} to={button.link} {...ukScroll(button.link)}>{button.label}</Link>
  )
}
export default Button
