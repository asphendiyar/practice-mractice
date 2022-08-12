import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions/";

class App extends Component {
  render() {
    return (
      <>
        <div>{this.props.count}</div>

        <button onClick={() => this.props.increment()}>add</button>
        <button onClick={() => this.props.decrement()}>no add</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = () => {
  return {
    increment,
    decrement,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
