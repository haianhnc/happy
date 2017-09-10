import React, { Component } from 'react';
import PropTypes from 'prop-types';

import horizon from '../images/horizon.jpg'

class HorizontalUnit extends Component {
  static PropTypes = {
    horizontal_unit: PropTypes.object.isRequired
  };

  static defaultProps = {
    horizontal_unit: {image: "", text: "", tag: "" }
  };

  render(){
    let image = this.props.horizontal_unit.image;
    let tag = this.props.horizontal_unit.tag;
    let text = this.props.horizontal_unit.text;

    return(
        <div className="horizon_unit">
          <div className="horizon_unit_image"><img src={horizon} height="25" width="40" /></div>
          <div className="horizon_unit_content">
            <div className="horizon_tag">{tag}</div>
            <div className="horizon_text">{text}</div>
          </div>
        </div>
      );
  }
}

export default HorizontalUnit;