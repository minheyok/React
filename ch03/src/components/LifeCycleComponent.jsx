import React, { Component } from "react";

export default class LifeCycleComponent extends Component {
  state = {
    count: 0,
    isValue: true,
  };

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate...");
  }

  render() {
    return (
      <div className="LifeCycleComponent">
        <p>
          count: {this.state.count}
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            증가
          </button>
          <p>
            <button
              onClick={() => {
                this.setState({});
              }}
            ></button>
          </p>
        </p>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount...");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
