import React, {Component} from 'react'
import Header from './header/Header'
import InputAdornment from '@material-ui/core/InputAdornment'
import {default as SearchIcon} from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import Bookshelf from '../components/tab-book/tab-book'
import Book from '../components/book/book'
import './search.scss'
import '../App.css'

class Home extends Component {
    
  componentDidMount() {
    this.props.getAll()
  }
  
  render () {
    const { performSearch, updateBook, searchedBooks } = this.props
    let content
    if ( searchedBooks && searchedBooks.length ) {
      content = (
        <Bookshelf>
          { searchedBooks.map( book => (
            <Book
              key={ book.id }
              updateBook={ updateBook }
              book={ book }
            />
          ))}
        </Bookshelf>
      )
    } else if ( searchedBooks && !searchedBooks.length) {
      content = <h1>Book not found</h1>
    } else {
      content = <h1>Search again. We have many options.</h1>
    }
    return (
      <div className="search">>
        <Header backButton>
          <div className="search__bar">
            <TextField
                placeholder="Search by title or author"
                fullWidth
                onChange={performSearch}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon />
                    </InputAdornment>
                ),
                }}
              />
            </div>
          </Header>
          <div className="search__results">
            { content }                   
          </div>
      </div>
    )
}
}

export default Home;