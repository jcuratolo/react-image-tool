import React, { Component } from 'react';
import store from './store.js';
import Tools from './tools.js';
import Canvas from './canvas.js';

var appStyle = {
  width: '640px',
  margin: '10px',
  border: '1px solid black'
};

export default class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(this.update.bind(this));
  }

  update() {
    // console.log('omg brittany im totally updating right now');
    const storeState = store.getState();
    this.setState(storeState);
  }

  render() {
    return (
      <div style={appStyle}>
        <Tools 
          imagePosition={this.state.position}
          imgSrc={this.state.imgSrc} />
        <Canvas
          imagePosition={this.state.position}
          imgSrc={this.state.imgSrc} />
      </div>
    );
  }
};
