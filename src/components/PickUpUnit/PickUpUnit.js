import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FirstFeatureBanner from './FirstFeatureBanner';
import HorizontalUnit from './HorizontalUnit';


class PickUpUnit extends Component {
  static PropTypes = {
    pickupunit: PropTypes.object.isRequired
  };

  static defaultProps = {
    pickupunit: {title: "", first_feature_banner: "", data_rows: [] }
  };

  render(){
    let title = this.props.pickupunit.title;
    let first_feature_banner = this.props.pickupunit.first_feature_banner;
    let data_rows = this.props.pickupunit.data;
    let data_lists = [];
    let row;

    data_rows.forEach(function(row, key){
      data_lists.push(<HorizontalUnit key={key} horizontal_unit={row} />);
    });

    return(
      <div className="PickUpUnit">
        <div className="title"><h1>{title}</h1></div>
        <FirstFeatureBanner first_feature_banner={first_feature_banner} />
        <div>{data_lists}</div>
      </div>
    );
  }
}

export default PickUpUnit;