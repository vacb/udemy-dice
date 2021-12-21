import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    // Pick two new rolls
    const side1 = Math.floor(Math.random() * this.props.sides.length);
    const side2 = Math.floor(Math.random() * this.props.sides.length);
    const newDie1 = this.props.sides[side1];
    const newDie2 = this.props.sides[side2];
    // Set state with new values
    this.setState({ die1: newDie1, die2: newDie2 });
  }

  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
