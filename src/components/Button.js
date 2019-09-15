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
    const  path=button.link||'';
  if(path!==''){
    if(path.indexOf("/")===0){
      return (
        <Link className={btnClass} to={path} {...ukScroll(button.link)}>{button.label}</Link>
      )
    }
    return (
      <a className={btnClass} href={path} {...ukScroll(button.link)}>{button.label}</a>
    )
  }
  return (
    <button className={btnClass}>{button.label}</button>
  )


}
export default Button
