import React, { Component } from "react";

export default class Displays extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.age} </h2>
      </div>
    );
  }
}
