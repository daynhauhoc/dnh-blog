import React, { PropTypes } from "react"
import Link from "statinamic/lib/Link"
import LogoImg from "./logo-full.png"
import styles from "./style.css"

class SidebarLeft extends React.Component {
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  static propTypes = {
    searchInput: PropTypes.node.isRequired,
  };

  render() {
    const {
      pkg: { config },
    } = this.context.metadata

    return (
      <div className={ styles.wrapper }>
        <div className={ styles.inner }>
          <header>
            <Link className={ styles.siteLogo } to="/">
              <img src={ LogoImg } />
            </Link>
            <h1>
              <Link className={ styles.siteTitle } to={ "/" }>
                { config.siteTitle }
              </Link>
            </h1>
            <p>{ config.siteDescr }</p>
            { this.props.searchInput }
          </header>
          <footer>
            <p>
              Built with
              <span style={ { color: "red" } }> ♥ </span>
              by <a href="https://khoanguyen.me">Khoa Nguyen</a>
            </p>
            <p className={ styles.copyright }>&copy; All rights reserved.</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default SidebarLeft
