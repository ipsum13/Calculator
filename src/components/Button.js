import React from 'react';
import '../style/Button.css';


class Button extends React.Component {

    handleClick = () => {
    this.props.clickHandler((this.props.value) ? this.props.value : this.props.name)
    }
    render() {
        const className = [
            "flex-container",
            this.props.blue ? "blue" : "",
            this.props.orange ? "orange" : "",
            this.props.operator? "operator" : "",
          ];
        return (    
            <div className={className.join(" ").trim()}><button className="button" onClick={this.handleClick}>{this.props.name}</button></div>
        )
    }
}

export default Button