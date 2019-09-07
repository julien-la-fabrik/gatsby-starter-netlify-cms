import React from 'react'
import {Link} from 'gatsby'
// import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import settings from '../settings/index.json';
const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <nav className="uk-navbar-container" >
        <div className="uk-container">
          <div className="uk-navbar">

      <div className="uk-navbar-left">

        <Link to="/" className="uk-navbar-item uk-logo" title="Logo">
          <img src={logo} alt="Kaldi" style={{
              width: '88px'
            }}/>
        </Link>

        <ul className="uk-navbar-nav">
        {
          settings.mainmenu.map((links, index) => (
            <li className="uk-visible@s" key={"main-menu-" + index}>
            <Link className="navbar-item" to={links.path}>
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
