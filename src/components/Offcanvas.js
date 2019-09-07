import React from 'react'
import {Link} from 'gatsby'
// import github from '../img/github-icon.svg'
import settings from '../settings/index.json';
const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    // const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    // // Check if there are any navbar burgers
    // if ($navbarBurgers.length > 0) {
    //   // Add a click event on each of them
    //   $navbarBurgers.forEach(el => {
    //     el.addEventListener('click', () => {
    //       // Get the target from the "data-target" attribute
    //       const target = el.dataset.target
    //       const $target = document.getElementById(target)
    //
    //       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //       el.classList.toggle('is-active')
    //       $target.classList.toggle('is-active')
    //     })
    //   })
    // }
  }

  render() {
    return (

      <div id="offcanvas-usage" uk-offcanvas="">
    <div className="uk-offcanvas-bar">

        <button className="uk-offcanvas-close" type="button" uk-close=""></button>

        <ul className="uk-nav uk-nav-default">
        {
          settings.mainmenu.map((links, index) => (
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
