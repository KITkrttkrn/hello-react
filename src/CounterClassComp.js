import React, { Component } from "react";

export default class CounterFuncComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <h1>CounterClassComp</h1>
        <h3>Counter : {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            if (this.state.count > 0) {
              this.setState({ count: this.state.count - 1 });
            } else {
              this.setState({ count: 0 });
            }
          }}
        >
          REMOVE
        </button>
        <button
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          RESET
        </button>
      </div>
    );
  }
}
