import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GotoLineButton extends Component{
  static PropTypes = {
    more: PropTypes.string.isRequired
  };

  static defaultProps = {
    more: "more"
  };

  render(){
    const more = this.props.more;
    return(
        <div className="GotoLineButton"><a href="#">{more}</a></div>
      );
  }
}

export default GotoLineButton;