import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../style/App.css';
import Calculate from '../logic/Calculate'

class App extends React.Component {
    state = {
        total: '',
    }

    handleClick = buttonName => {
        this.setState(Calculate(this.state, buttonName))
    }

    render() {
        return (
            <React.Fragment>
            <div className="header">
                <span className="calculator">Calculator</span>
            </div>

            <Display value={ this.state.total} />
            <ButtonPanel clickHandler={this.handleClick} />
           </React.Fragment> 

        )
    }
};

export default App;