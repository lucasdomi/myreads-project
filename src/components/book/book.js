import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import PropTypes from 'prop-types'
import './book.css'
import TextField from '@material-ui/core/TextField';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func,
  }

  state = {
    weightRange: '',
  };
  
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  getLabel = tab => {
    if ( tab === 'wantToRead') {
      return 'To Read'
    } else if ( tab === 'currentlyReading') {
      return 'Reading'
    }
    return 'Read'
  }

  render() {
    const { book, updateBook } = this.props
    const ranges = [
      {
        value: 'wantToRead',
        label: 'To Read',
      },
      {
        value: 'currentlyReading',
        label: 'Reading',
      },
      {
        value: 'read',
        label: 'Read',
      },
    ];
    return (
      <Card className="book">
        <CardMedia
          component="img"
          className="book__cover"
          image={ book.imageLinks.thumbnail}
          title={ book.title }
        />
        <div className="book__description">
          <CardContent>
            <Typography variant="headline" component="h1">
              { book.title }
            </Typography>
            { book.subtitle && (
              <Typography variant="subheading" component="h2">
                { book.subtitle }
              </Typography>
            )}
            { book.authors && (
              <Typography paragraph component="p" className="book__authors">
                { book.authors.map( (author, idx) => (
                  idx === 0 ? author :  `, ${author}`
                ))}
              </Typography>
            )}
          </CardContent>
          <CardActions className="book__description__buttons">
            <TextField
              select
              variant="outlined"
              label="Status Book"
              value={this.state.weightRange}
              onChange={this.handleChange('weightRange')}
              InputProps={{
                  startAdornment: <InputAdornment position="start">Status</InputAdornment>,
              }}
              >
              {ranges.map(option => (
                  <MenuItem key={option.value} value={option.value} 
                  >
                    {option.label}                
                  </MenuItem>
              ))}
            </TextField>
              <IconButton
                aria-label="Delete"
                onClick={ () => updateBook(book, 'none') }
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
          </CardActions>
        </div>
      </Card>
    )
  }
}

export default Book
