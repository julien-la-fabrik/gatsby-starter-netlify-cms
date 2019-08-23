import React from 'react'
import {Link} from 'gatsby'
// import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

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
      <div className="uk-container">
      <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
      <div className="uk-navbar-left">

        <Link to="/" className="uk-navbar-item uk-logo" title="Logo">
          <img src={logo} alt="Kaldi" style={{
              width: '88px'
            }}/>
        </Link>

        <ul className="uk-navbar-nav">
          <li>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/landing">
              Landing Example
            </Link>
          </li>
        </ul>

      </div>
    </nav>
          </div>
        )
  }
}

export default Navbar
