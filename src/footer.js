import React, { Component } from 'react';

const Footer = ({ imgPosition }) => {
  const { left, top } = imgPosition;
  return (
    <div>
      <h3 style={{float: 'left'}}>Left: {left}</h3>
      <h3 style={{float: 'left', marginLeft: 10}}>Top: {top}</h3>
    </div>
  )
};

export default Footer;
