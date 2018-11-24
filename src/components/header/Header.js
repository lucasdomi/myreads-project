import React, {Component} from 'react'
import './header.css'

class Header extends Component {
    
    render () {
        const tabsHeader = this.props.children
        return (
            <header className="header">
                <div className="div-header-style">
                    <h1>My Reads</h1>
                </div>
                {tabsHeader}
            </header>
        )
    }
}

export default Header;