import React from 'react'
import {Link} from 'gatsby'
import settings from '../settings';

function ukScroll(path){
  if(path.indexOf("#")===0){
    return {'uk-scroll':'true'};
  }
  return {}
}
const Navbar = class extends React.Component {
  render() {
    return (
      <nav className="uk-navbar-container" >
        <div className="uk-container">
          <div className="uk-navbar">

      <div className="uk-navbar-left">

        <Link to="/" className="uk-navbar-item uk-logo" title="Logo">
          <img src={settings.siteinfos.logo} alt={settings.siteinfos.sitename} style={{
              width: '88px'
            }}/>
        </Link>

        <ul className="uk-navbar-nav">
        {
          settings.menus.mainmenu.map((links, index) => (
            <li className={this.props.currentPath === links.path ? "uk-active uk-visible@s":"uk-visible@s"} key={"main-menu-" + index}>
            <Link className="navbar-item" to={links.path} {...ukScroll(links.path)}>
              {links.title}
            </Link>
            </li>
          ))
        }
        </ul>

      </div>
      <div className="uk-navbar-right">
      <ul className="uk-navbar-nav">
      <li className="uk-hidden@s" >
      {/* eslint-disable-next-line */}
      <a className="uk-navbar-toggle" uk-toggle="" uk-navbar-toggle-icon="" href="#offcanvas-usage"></a>
      </li>
      </ul>
      </div>
            </div>
            </div>
    </nav>
        )
  }
}

export default Navbar
