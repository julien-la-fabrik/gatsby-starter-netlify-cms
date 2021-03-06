import React, { Component } from 'react';
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Offcanvas from '../components/Offcanvas'
import Footer from '../components/Footer'
import settings from '../settings';
import './uikit.scss';

// loads the Icon plugin

class TemplateWrapper extends Component {
  state = { currentPath: false };
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
        const uikit = require('uikit');
        const icons = require('uikit/dist/js/uikit-icons.min');
        uikit.use(icons);
      this.setState({ currentPath: window.location.pathname });
    }
  };

  render() {
    return (
      <div>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{settings.siteinfos.sitename}</title>
          <meta
            name="description"
            content={settings.siteinfos.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color={settings.theme.brandcolorprimary}
          />
          <meta name="theme-color" content={settings.theme.brandcolorprimary} />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={settings.siteinfos.sitename} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        {settings.theme.menutopbartype==="sticky" && (
          <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
          <Navbar currentPath={this.state.currentPath} />
          </div>
        )}
        {settings.theme.menutopbartype!=="sticky" && (
        <Navbar currentPath={this.state.currentPath} />
        )}
        <div>{this.props.children}</div>
        <Footer currentPath={this.state.currentPath} />
        <Offcanvas currentPath={this.state.currentPath} />

      </div>
      </div>
    );
  }
}


export default TemplateWrapper;
