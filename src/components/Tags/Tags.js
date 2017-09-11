import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OneTag from "./OneTag"

export class Tags extends Component {
  static PropTypes = {
    tags: PropTypes.object.isRequired
  };

  static defaultProps = {
    tags: {title: "", tags: [] }
  };

  render(){
    let title = this.props.tags.title;
    let tags = this.props.tags.tags;
    let data_lists = [];

    tags.forEach(function(unit, key){
      data_lists.push(<OneTag key={key} tag={unit} />);
    });
    return(
      <div className="Tags">
        <div className="title"><h1>{title}</h1></div>
        <div className="content">
          {data_lists}
        </div>
      </div>
    );
  }
}