import React from 'react';

import './PImage.less'; 

export default class PImage extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.containerRef = React.createRef();
  }

  render() {
    const style = {
      maxHeight: 500 
    };
    return (
      <div ref={this.containerRef} className="PImage">
        <img style={style} ref={this.imageRef} src={this.props.src} alt={this.props.alt} />
        <p className="PImage-title">
          {this.props.children}
        </p>
      </div>
    );
  }
}