import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircleUnit from "./CircleUnit";

export class ExpertUnit extends Component {
  static PropTypes = {
    experts: PropTypes.object.isRequired
  };

  static defaultProps = {
    experts: {title: "", cicler_units: {}}
  };

  render(){
    let title = this.props.experts.title;
    let cicler_units = this.props.experts.cicler_units;
    let data_lists = [];

    cicler_units.forEach(function(unit, key){
      data_lists.push(<CircleUnit key={key} circle_unit={unit} />);
    });

  return(
    <div className="ExpertUnit">
      <div className="title"><h1>{title}</h1></div>
      <div className="content">
        {data_lists}
      </div>
    </div>
  );
  }
}