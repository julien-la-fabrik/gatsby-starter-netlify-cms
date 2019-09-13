import React from 'react'
import { Link } from 'gatsby'

import settings from '../settings';
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

function ukScroll(path) {
  if (path.indexOf("#") === 0) {
    return { 'uk-scroll': 'true' };
  }
  return {}
}
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="uk-background-secondary uk-section">
        <img
          className="uk-align-center uk-margin-bottom"
          src={settings.siteinfos.logo} alt={settings.siteinfos.sitename}
          style={{ width: '14em' }}
        />
        <div className="uk-container">
          <div uk-grid="" className=" uk-child-width-expand@s">
            <section className="">
              <ul className="uk-nav uk-background-secondary">
                {
                  settings.menus.footermenu.map((links, index) => (
                    <li className={this.props.currentPath === links.path ? "uk-active" : ""} key={"footer-menu-" + index}>
                      <Link className="" to={links.path} {...ukScroll(links.path)}>
                        {links.title}
                      </Link>
                    </li>
                  ))
                }
                <li><a
                  className=""
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admin
                    </a></li>
              </ul>
            </section>
            <section>
              <ul className="uk-nav">
                <li>
                  <Link className="" to="/blog">
                    Latest Stories
                    </Link>
                </li>
                <li>
                  <Link className="" to="/contact">
                    Contact
                    </Link>
                </li>
              </ul>
            </section>
            <div className="column is-4 social">

              <a title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="vimeo" href="https://vimeo.com">
                <img
                  src={vimeo}
                  alt="Vimeo"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
