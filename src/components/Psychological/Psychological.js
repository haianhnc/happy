import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HolizoUnit from "./HolizoUnit"

export class Psychological extends Component {
  static PropTypes = {
    pickupunit: PropTypes.object.isRequired
  };

  static defaultProps = {
    pickupunit: {title: "", first_feature_banner: "", data_rows: [] }
  };

  render(){
    let holizo_units = this.props.psychological.holizo_units;
    let title = this.props.psychological.title;
    let data_lists = [];

    holizo_units.forEach(function(unit, key){
      data_lists.push(<HolizoUnit key={key} holizo_unit={unit} />);
    });

    return(
        <div className="Psychological">
          <div className="title"><h1>{title}</h1></div>
          <div className="content">
            {data_lists}
          </div>
        </div>
    );
  }
}