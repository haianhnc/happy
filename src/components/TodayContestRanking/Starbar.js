import React, { Component } from 'react';
import PropTypes from 'prop-types';

import star_icon from '../images/star.png'

class Starbar extends Component{
  render(){
    let star_num = this.props.star;
    // let star_icon = this.props.star_icon;
    let star_arr = [];
    for(let i=0; i< star_num; i++){
      star_arr.push(<img  key={i} className="star_icon" src={star_icon} />);
    }

    return(
        <div className="star_bar">{star_arr}</div>
      );
  }
}

export default Starbar;