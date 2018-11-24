import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Header from './header/Header'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    render () {
        return (
            <div>
                <Header>
                    <Tabs
                        value = {this.state.value}
                        onChange = {this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        >
                        <Tab label="Want to Read" />
                        <Tab label="Currently Reading" />
                        <Tab label="Read" />
                    </Tabs>
                </Header>
                <div className="tabs-cards">
                    { this.state.value===0 && 
                    <div>
                        <p>Primeira</p>
                    </div> }
                    { this.state.value===1 && 
                    <div>
                        <p>Segunda</p>
                    </div> }
                    { this.state.value===2 && 
                    <div>
                        <p>Terceira</p>
                    </div> }
                    { this.state.value===3 && 
                    <div>
                        <p>Favorito</p>
                    </div> }
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