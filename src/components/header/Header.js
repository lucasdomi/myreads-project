import React, { Component } from 'react'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { Link } from 'react-router-dom'
import '../../css/header/header.css'

class Header extends Component {
  render() {
    const subHeader = this.props.children

    return (
      <header className="header-bar">
        <div className="header-bar__container">
          { this.props.backButton && (
            <Link to="/">
              <ArrowBackIos className="header-bar__container__back" />
            </Link>
          )}
          <h1><Link to="/">MyReads - Your virtual bookcase</Link></h1>
        </div>
        { subHeader }
      </header>
    )
  }
}

export default Header
