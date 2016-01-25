import React, { Component } from 'react';
import store from './store.js';

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
  handleCopyClick() {
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
      `<img style="position: absolute; left: ${left}px; top: ${top}px;">`
    );
  }

  handleClearImgSrcClick() {
    store.dispatch({
      type: 'UPDATE_IMG_SRC',
      src: ''
    });
  }
  onImgSrcInputChange(ev) {
    const imgSrc = this.refs.imgSrc;
    store.dispatch({
      type: 'UPDATE_IMG_SRC',
      src: imgSrc.value
    });
  }
  render() {
    const { imagePosition, imgSrc } = this.props;
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
            value={this.buildImgHtml(imagePosition)}
            style={inputStyle} />
          <button onClick={this.handleCopyClick.bind(this)}>
            Copy
          </button>
        </div>
      </div>
    )
  }
}
