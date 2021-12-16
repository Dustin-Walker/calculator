import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    toggleExpandedMode: PropTypes.func,
    expandedMode: PropTypes.bool,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  toggleExpandedMode = () => {
    this.props.toggleExpandedMode();
  }

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="+/-" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="%" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="÷" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} />
          <Button name="sqrt" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} hidden={!this.props.expandedMode}/>
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="8" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="9" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="x" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} />
          <Button name="log" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} hidden={!this.props.expandedMode}/>

        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="5" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="6" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="-" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} />
          <Button name="ln" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} hidden={!this.props.expandedMode}/>

        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="2" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="3" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="+" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} />
          <Button name="!" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} hidden={!this.props.expandedMode}/>
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="." clickHandler={this.handleClick} expandedMode={this.props.expandedMode} />
          <Button name="=" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} />
          <Button name={this.props.expandedMode ? "Less" : "More"} clickHandler={this.toggleExpandedMode} orange expandedMode={this.props.expandedMode} />
          <Button name="x^y" clickHandler={this.handleClick} orange expandedMode={this.props.expandedMode} hidden={!this.props.expandedMode}/>
        </div>
      </div>
    );
  }
}
