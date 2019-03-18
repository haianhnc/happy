import React, { Component } from 'react';
import PropTypes from 'prop-types';
import horizon from '../images/horizon.jpg'

class LoveButton extends Component {
  static PropTypes = {
    heart: PropTypes.string.isRequired
  };

  static defaultProps = {
    heart: ""
  };


  render(){
    let text = this.props.heart;
    return(
      <div className="LoveButton">
         <div className="lovebutton_heart"><img src={horizon} height="10" width="10" /></div>
         <div className="lovebutton_text">{text}</div>
      </div>
    );
  }
}

export default LoveButton;