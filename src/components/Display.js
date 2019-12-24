import React from 'react';
import '../style/Display.css';

class Display extends React.Component {

    render() {
        return (
            <div className="display-container">
                <div>{this.props.value}</div>
            </div>
        )
    }
}

export default Display;