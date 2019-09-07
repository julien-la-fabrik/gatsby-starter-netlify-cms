import React from 'react'
import {Link} from 'gatsby'
// import github from '../img/github-icon.svg'
import menusSettings from '../settings/menus.json';
const Navbar = class extends React.Component {

  render() {
    return (

      <div id="offcanvas-usage" uk-offcanvas="">
    <div className="uk-offcanvas-bar">

        <button className="uk-offcanvas-close" type="button" uk-close=""></button>

        <ul className="uk-nav uk-nav-default">
        {
          menusSettings.mainmenu.map((links, index) => (
            <li key={"main-menu-" + index}>
            <Link className="navbar-item" to={links.path}>
              {links.title}
            </Link>
            </li>
          ))
        }
        </ul>
    </div>
</div>
        )
  }
}

export default Navbar
