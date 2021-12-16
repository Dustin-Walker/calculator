import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    expandedMode: false,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  toggleExpandedMode = () => {
    this.setState({
      ...this.state,
      expandedMode: !(this.state.expandedMode)
    })
  }

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} toggleExpandedMode={this.toggleExpandedMode} expandedMode={this.state.expandedMode} />
      </div>
    );
  }
}
