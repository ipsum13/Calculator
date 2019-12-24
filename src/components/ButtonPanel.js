import React from 'react';
import Button from './Button'
import '../style/ButtonPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide, faTimes, faBackspace, faMinus, faPlus, faEquals, faPercentage, faSquareRootAlt, } from '@fortawesome/free-solid-svg-icons'

class ButtonPanel extends React.Component {

    handleClick = buttonName => {
        this.props.clickHandler(buttonName)
    }

    render() {
        var divide = <FontAwesomeIcon icon={faDivide} />
        var multiply = <FontAwesomeIcon icon={faTimes} />
        var del = <FontAwesomeIcon icon={faBackspace} />
        var minus = <FontAwesomeIcon icon={faMinus} />
        var plus = <FontAwesomeIcon icon={faPlus} />
        var equals = <FontAwesomeIcon icon={faEquals} />
        var percentage = <FontAwesomeIcon icon={faPercentage} />
        var squareRoot = <FontAwesomeIcon icon={faSquareRootAlt} />

        return (
            <div className="flex-container">
                <div className="row">
                    <Button name={squareRoot} value='sqrt' clickHandler={this.handleClick} />
                    <Button name="sin" value='sin' clickHandler={this.handleClick} />
                    <Button name="ln" value='ln' clickHandler={this.handleClick} />
                    <Button name='eˣ' value='ePow' clickHandler={this.handleClick} />
                    <Button name="|X|" value='abs' clickHandler={this.handleClick} />
                </div>

                <div className="row">
                    <Button name='X!' value='factorial' clickHandler={this.handleClick} />
                    <Button name='cos' value='cos' clickHandler={this.handleClick} />
                    <Button name='log' value='log' clickHandler={this.handleClick} />
                    <Button name="X²" value='square' clickHandler={this.handleClick} />
                    <Button name="π" value='pi' clickHandler={this.handleClick} />
                </div>

                <div className="row">
                    <Button name={percentage} value='%' clickHandler={this.handleClick} operator />
                    <Button name="tan" value='tan' clickHandler={this.handleClick} />
                    <Button name="1/x" value='customDivide' clickHandler={this.handleClick} />
                    <Button name="Xʸ" value='power' clickHandler={this.handleClick} />
                    <Button name="e" clickHandler={this.handleClick} />
                </div>

                <div className="row">
                    <Button name="C" clickHandler={this.handleClick} orange />
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="0" clickHandler={this.handleClick} />
                </div>

                <div className="row">
                    <Button name='(' clickHandler={this.handleClick} operator />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="." clickHandler={this.handleClick} />
                </div>

                <div className="row">
                    <Button name=')' clickHandler={this.handleClick} operator />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name={del} value='del' clickHandler={this.handleClick} orange />
                </div>

                <div className="row">
                    <Button name={divide} value='/' clickHandler={this.handleClick} operator />
                    <Button name={minus} value='-' clickHandler={this.handleClick} operator />
                    <Button name={plus} value='+' clickHandler={this.handleClick} operator />
                    <Button name={multiply} value='*' clickHandler={this.handleClick} operator />
                    <Button name={equals} value='=' clickHandler={this.handleClick} blue />
                </div>
            </div>
        )
    }
}

export default ButtonPanel;