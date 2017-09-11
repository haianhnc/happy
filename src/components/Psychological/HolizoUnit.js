import React, { Component } from 'react';
import PropTypes from 'prop-types';

import horizon from '../images/horizon.jpg'

class HolizoUnit extends Component {
  static PropTypes = {
    holizo_unit: PropTypes.object.isRequired
  };

  static defaultProps = {
    holizo_unit: {icon: "", content: "" }
  };

  render(){
    let image = this.props.holizo_unit.icon;
    let text = this.props.holizo_unit.content;
    return(
      <div className="HolizoUnit">
        <div className="HolizoUnitImage"><img src={horizon} height="25" width="40" /></div>
        <div className="text">{text}</div>
      </div>
      );
  }
}

export default HolizoUnit;