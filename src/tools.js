import React, { Component } from 'react';
import store from './store.js';

const controlStyle = {
  margin: '10px'
};

const inputStyle = {
  width: '50%'
};

export default class Tools extends Component {
  handleClick() {
    try {
      document.getElementById('htmlInput').select();
      document.execCommand('copy');
    } catch (er) {
      console.error('Sorry, unable to copy in your browser.');
    }
  }
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
      <div>
        <div style={controlStyle}>
          <input
            type="text"
            id="htmlInput"
            readOnly
            value={this.buildImgHtml(imagePosition)}
            style={inputStyle} />
          <button onClick={this.handleClick.bind(this)}>Copy</button>
        </div>
      </div>
    )
  }
}
