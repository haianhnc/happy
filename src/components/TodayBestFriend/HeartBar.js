import React, { Component } from 'react';
import PropTypes from 'prop-types';

import heart_icon from '../images/heart.png'

class HeartBar extends Component{
  static PropTypes = {
    heart: PropTypes.number.isRequired
  };

  static defaultProps = {
    heart: 5
  };

  render(){
    let heart_num = this.props.heart;
    let heart_arr = [];
    for(let i=0; i< heart_num; i++){
      heart_arr.push(<div key={i} className="heart_icon"><img src={heart_icon} height="16" width="16" /></div>);
    }

    return(
        <div className="heart_bar">{heart_arr}</div>
      );
  }
}

export default HeartBar;