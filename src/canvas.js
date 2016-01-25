import React, { Component, PropTypes } from 'react';
import Draggable from 'react-draggable';
import store from './store.js';

var canvasStyle = {
  width: 640,
  height: 480,
  border: '1px solid green',
  position: 'relative'
};

var squareStyle = {
  height: '64px',
  width: '64px',
  backgroundColor: 'blue'
};

var square2Style = {
  height: '64px',
  width: '64px',
  backgroundColor: 'red'
};

export default class Canvas extends Component {
  handleStop(ev, position) {
    store.dispatch({
      type: 'UPDATE_POSITION',
      position: position.position
    })
  }

  render() {
    const startPosition = {
      x: this.props.imagePosition.left,
      y: this.props.imagePosition.top
    };
    return (
      <div style={canvasStyle}>
        <Draggable
          bounds="parent"
          start={startPosition}
          onStop={this.handleStop.bind(this)}>
          <div style={squareStyle}></div>
        </Draggable>
      </div>
    )
  }
};
