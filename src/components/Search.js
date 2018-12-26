import React, {Component} from 'react'
import Header from './header/Header'
import InputAdornment from '@material-ui/core/InputAdornment'
import {default as SearchIcon} from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import './search.scss'
import '../App.css'

class Home extends Component {
    
  componentDidMount() {
    this.props.getAll()
  }
  
  render () {
    return (
      <div className="search">>
        <Header backButton>
          <div className="search__bar">
            <TextField
                placeholder="Search by title or author"
                fullWidth
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
          <div className="tabs-cards">
              <p>Página de busca</p>                     
          </div>
      </div>
    )
}
}

export default Home;