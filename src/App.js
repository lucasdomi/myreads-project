import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './api/BooksAPI'
import Home from './components/Home'
import Search from './components/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
		searchedBooks: [],
  }

	async mountShelves() {
		const books = await BooksAPI.getAll()
		const filter_books = ( books, shelf ) => books.filter( b => b.shelf === shelf )
		const filterBy = ( books, shelf ) => filter_books( books, shelf )
    const wantToRead = filterBy(books, 'wantToRead')
    const currentlyReading = filterBy(books, 'currentlyReading')
    const read = filterBy(books, 'read')

		this.setState({ wantToRead, currentlyReading, read})
	}

	getAll = async() => {
    const books = await BooksAPI.getAll()
    this.setState({ searchedBooks: books})
	}

  updateBook = async( book, newShelf ) => {
    await BooksAPI.update(book, newShelf)
    const oldShelf = book.shelf
    book.shelf = newShelf
    if (oldShelf !== 'none' && newShelf !== 'none') {
      this.setState( state => ({
				...state,
        [oldShelf] : state[oldShelf].filter( b => b.id !== book.id),
        [newShelf] : [...state[newShelf], book],
      }))
    } else if (oldShelf && newShelf === 'none') {
			this.setState( state => ({
				...state,
        [oldShelf] : state[oldShelf].filter( b => b.id !== book.id),
      }))
    } else {
			this.setState( state => ({
				...state,
        [newShelf] : [...state[newShelf], book],
      }))
    }
	}

	performSearch = async( e ) => {

    const books = await BooksAPI.search(e.target.value)
		if ( !books || books.error ) {
			this.setState({ searchedBooks: [] })
		} else {
			books.map( book => book.shelf = this.getTabBook(book.id))
			this.setState({ searchedBooks: books })
		}
	}

	getTabBook = book_id => {
		const filter = shelf => this.state[shelf].filter( book => book.id === book_id)
		let found
		found = filter('wantToRead')
		if (found.length) return 'wantToRead'
		found = filter('currentlyReading')
		if (found.length) return 'currentlyReading'
		found = filter('read')
		if (found.length) return 'read'
		return 'none'
	}

	async componentDidMount() {
		await this.mountShelves()
	}

  render() {
    const { searchedBooks, currentlyReading, wantToRead, read} = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Home
            updateBook={ this.updateBook }
            currentlyReading={ currentlyReading }
            wantToRead= { wantToRead }
            read={ read }
          />
        )} />
        <Route exact path="/search" render={() => (
          <Search
						getAll={ this.getAll }
						updateBook={ this.updateBook }
						performSearch={ this.performSearch }
						searchedBooks={ searchedBooks }
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
