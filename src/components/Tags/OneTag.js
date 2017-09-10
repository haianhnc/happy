import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OneTag extends Component {
  static PropTypes = {
    tag: PropTypes.string.isRequired
  };

  static defaultProps = {
    tag: ""
  };

  render(){
    let tag = this.props.tag;
    return(
      <div className="OneTag">
        {tag}
      </div>
      );
  }
}

export default OneTag;