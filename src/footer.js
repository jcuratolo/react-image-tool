import React, { Component } from 'react';

const Footer = ({ imgPosition, imgSrc }) => {
  const { left, top } = imgPosition;
  return (
    <div style={{borderTop: '1px solid black'}}>
      <div style={{padding: 10}}>
        <h3>Left: {left}px Top: {top}px</h3>
        <h3>{imgSrc}</h3>
      </div>
    </div>
  )
};

export default Footer;
