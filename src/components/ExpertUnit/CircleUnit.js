import React, { Component } from 'react';
import PropTypes from 'prop-types';
import writer from '../images/writer.jpg'

class CircleUnit extends Component {
  static PropTypes = {
    circle_unit: PropTypes.object.isRequired
  };

  static defaultProps = {
    circle_unit: {icon: "", content: "" }
  };

  render(){
    // let image = this.props.circle_unit.icon;
    let text = this.props.circle_unit.content;
    return(
      <div className="CircleUnit">
        <div className="circle_unit_img"><img src={writer} height="25" width="40" /></div>
        <div className="text">{text}</div>
      </div>
    );
  }
}

export default CircleUnit;