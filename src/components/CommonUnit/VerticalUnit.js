import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoveButton from './LoveButton'

import vertical from '../images/vertical.jpeg'

class VerticalUnit extends Component {
  static PropTypes = {
    verticalunit: PropTypes.object.isRequired
  };

  static defaultProps = {
    verticalunit: {content: "", heart_text: ""}
  };

  render(){
      let text = this.props.verticalunit.content; 
      let heart = this.props.verticalunit.heart_text;

      return(
        <div className="VerticalUnit">
         <div className="verticalunit_image"><img src={vertical} /></div>
         <div className="text">{text}</div>
         <LoveButton heart={heart}/>
        </div>
      );
  }
}

export default VerticalUnit;