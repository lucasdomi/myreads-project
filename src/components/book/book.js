import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import PropTypes from 'prop-types'
import './book.css'
import noimage from './noimage.png';
import "../../css/responsive/page-responsive.css";
import StarRatingComponent from 'react-star-rating-component';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func,
  }

  state = {
    feedback : false,
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  };

  onRatingChanged = (newRating) => {
    localStorage.setItem(`rating-${this.props.book.id}`, newRating)
    this.setState({
      feedback: true
    })
  }

  getRating = ( book_id ) => {
    const value = localStorage.getItem(`rating-${book_id}`)
    return value;
  }

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
    const rating = this.getRating(book.id)
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
          {(book.shelf) === 'read' &&
            <div>
              <StarRatingComponent 
              name="rate1" 
              starCount={10}
              value={rating}
              onStarClick={this.onRatingChanged.bind(this)}
              />
            </div>
          }
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
          </CardActions>
        </div>
      </Card>
    )
  }
}

export default Book
