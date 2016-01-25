import React, { Component } from 'react';
import store from './store.js';
import actions from './actions.js';

const toolsStyle = {
  borderBottom: '1px solid black'
};

const controlsStyle = {
  margin: '10px',
};

const inputStyle = {
  width: '75%'
};


export default class Tools extends Component {
  // Used to copy generated HTML to clipboard
  handleCopyClick() {
    try {
      document.getElementById('htmlInput').select();
      document.execCommand('copy');
    } catch (er) {
      console.error('Sorry, unable to copy in your browser.');
    }
  }

  // Used to generate the correct html
  buildImgHtml(imgPosition, imgSrc) {
    const { left, top } = imgPosition;
    return (
      `<img src="${imgSrc} style="position: relative; left: ${left}px; top: ${top}px;">`
    );
  }

  // Used to clear the image src input field
  handleClearImgSrcClick() {
    actions.UPDATE_IMG_SRC('');
    document.getElementById('imgSrcInput').select();
  }

  // Used to handle changes to the image src input field
  onImgSrcInputChange(ev) {
    const { imgSrc } = this.refs;
    actions.UPDATE_IMG_SRC(imgSrc.value);
  }

  render() {
    const { imgPosition, imgSrc } = this.props;
    return (
      <div style={toolsStyle}>
        <div style={controlsStyle}>
          <input
            type="text"
            placeholder="Enter the src attribute of your image"
            ref="imgSrc"
            onChange={this.onImgSrcInputChange.bind(this)}
            value={imgSrc}
            id="imgSrcInput"
            style={inputStyle} />
          <button onClick={this.handleClearImgSrcClick.bind(this)}>
          Clear
          </button>
          <br/>
          <input
            type="text"
            id="htmlInput"
            readOnly
            value={this.buildImgHtml(imgPosition, imgSrc)}
            style={inputStyle} />
          <button onClick={this.handleCopyClick.bind(this)}>
            Copy
          </button>
        </div>
      </div>
    )
  }
}
