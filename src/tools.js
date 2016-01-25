import React, { Component } from 'react';
import store from './store.js';

const controlStyle = {
  margin: '10px'
};

const headerStyle = {
  // //minHeight: '100%',
  // overflowY: 'hidden',
  // //padding: '10px',
  // border: '1px solid black',
  // width: '100%'
};

export default class Tools extends Component {
  handleClick() {}
  buildImgHtml(imagePosition) {
    const left = imagePosition.left;
    const top = imagePosition.top;

    return (
      `<img style="position: absolute; left:${left}; top:${top};"/>`
    );
  }
  render() {
    console.log('header rendering');
    const imagePosition = this.props.imagePosition;

    return (
      <div style={headerStyle}>
        <div style={controlStyle}>
          <input
            type="text"
            readOnly
            value={this.buildImgHtml(imagePosition)} />
          <button onClick={this.handleClick.bind(this)}>Copy</button>
        </div>
      </div>
    )
  }
}
