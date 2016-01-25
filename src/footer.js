import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { left, top } = this.props.imgPosition;
    return (
      <div>
        <h3 style={{float: 'left'}}>Left: {left}</h3>
        <h3 style={{float: 'left', marginLeft: 10}}>Top: {top}</h3>
      </div>
      )
  }
}
