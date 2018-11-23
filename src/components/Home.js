import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class Home extends Component {

    state = {
        value:0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    render () {
        return (
            <div>
                <Tabs
                    value = {this.state.value}
                    onChange = {this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    >
                    <Tab label="To Read" />
                    <Tab label="Reading" />
                    <Tab label="Read" />
                </Tabs>
                <div className="pagina-teste">
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
                </div>
            </div>
        )
    }
}

export default Home;