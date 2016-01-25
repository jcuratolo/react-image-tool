import React, { Component, PropTypes } from 'react';
import Draggable from 'react-draggable';
import store from './store.js';

var canvasStyle = {
  width: 640,
  height: 480,
  position: 'relative'
};

const buildSquareStyle = (styleObj, cssTransform) => {
  return Object.assign({}, styleObj, cssTransform);
}

export default class Canvas extends Component {
  handleStop(ev, position) {
    store.dispatch({
      type: 'UPDATE_POSITION',
      position: position.position
    })
  }

  render() {
    const squareStyleWithTransform = buildSquareStyle({
      //transform: 'translate(0px,0px)'
    });

    return (
      <div style={canvasStyle}>
        <Draggable
          bounds="parent"
          onStop={this.handleStop.bind(this)}>
          <div style={{display: 'inline-block'}}>
            <img src={this.props.imgSrc} style={{pointerEvents: 'none'}}/>
          </div>
        </Draggable>
      </div>
    )
  }
};
