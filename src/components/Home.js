import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Header from './header/Header'

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
                        <Tab label="My Favorites"/>
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
            </div>
        )
    }
}

export default Home;