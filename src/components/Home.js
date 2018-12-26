import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Header from './header/Header'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import TabBook from '../components/tab-book/tab-book'
import Book from '../components/book/book'
class Home extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
    
    render () {
      const { updateBook, currentlyReading, wantToRead, read } = this.props
      return (
        <div>
          <Header>
            <Tabs
                value = {this.state.value}
                onChange = {this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                fullWidth
                >
                <Tab label="Want to Read" />
                <Tab label="Currently Reading" />
                <Tab label="Read" />
            </Tabs>
            </Header>
              <div className="tabs-cards">
                { this.state.value===0 && 
                 <TabBook>
                 { wantToRead.map( book => (
                   <Book
                     key={ book.id }
                     book={ book }
                     updateBook={ updateBook }
                   />
                 ))}
               </TabBook>}
                { this.state.value===1 && 
                <TabBook>
                { currentlyReading.map( book => (
                  <Book
                    key={ book.id }
                    book={ book }
                    updateBook={ updateBook }
                  />
                ))}
              </TabBook>}
                { this.state.value===2 && 
                <TabBook>
                { read.map( book => (
                  <Book
                    key={ book.id }
                    book={ book }
                    updateBook={ updateBook }
                  />
                ))}
              </TabBook>}
              </div>
                <Link to="/search">
                    <Button variant="fab" className="button-fix" color="primary" aria-label="Add">
                        <AddIcon />
                    </Button>
                </Link>         
            </div>
        )
    }
}

export default Home;