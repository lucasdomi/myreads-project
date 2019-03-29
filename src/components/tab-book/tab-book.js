import React, { Component } from 'react'
import '../../css/tab-book/tabbook.css'
import "../../css/responsive/page-responsive.css";

class TabBook extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="tabbook">
        <ol className="tabbook__books-container">
          { children.map((book, idx) => (
            (<li key={idx}>{book}</li>)
          ))}
        </ol>
      </div>
    )
  }
}

export default TabBook
