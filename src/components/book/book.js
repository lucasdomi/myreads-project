import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import DeleteIcon from '@material-ui/icons/Delete'

import PropTypes from 'prop-types'
import './book.css'
import TextField from '@material-ui/core/TextField';
import noimage from './noimage.png';

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
          image={ book.imageLinks ? book.imageLinks.thumbnail : noimage}
          title={ book.title }
        />
        <div className="book__description">
          <CardContent className="book__description__div">
            <Typography variant="h3" component="h1" className="book__h1">
             { book.title }
            </Typography>
            { book.subtitle && (
              <Typography variant="h5" component="h2" className="book__h2">
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
          <Button
              color="secondary"
              disabled={ book.shelf === 'wantToRead' }
              aria-label="To Read"
              onClick={ () => updateBook(book, 'wantToRead') }
            >
              To Read
            </Button>
            <Button
              color="secondary"
              disabled={ book.shelf === 'currentlyReading'}
              aria-label="Reading"
              onClick={ () => updateBook(book, 'currentlyReading') }
            >
              Reading
            </Button>
            <Button
              color="secondary"
              disabled={ book.shelf === 'read' }
              aria-label="Already Read"
              onClick={ () => updateBook(book, 'read') }
            >
              Read
            </Button>
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
