import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowMoreButton extends Component{
  render(){
    const more = this.props.more;
    return(
        <div className="ShowMoreButton"><a href="#">{more}</a></div>
      );
  }
}

export default ShowMoreButton;