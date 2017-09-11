import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import VerticalUnit from './VerticalUnit'

class CommonUnit extends Component {
  static PropTypes = {
    common: PropTypes.objectisRequired
  };

  static defaultProps = {
    common: {}
  };

  render(){
    let title = this.props.common.title;
    let vertical_units = this.props.common.vertical_units
    let data_lists = [];

    vertical_units.forEach(function(unit, key){
      data_lists.push(<VerticalUnit key={key} verticalunit={unit} />);
    });

    return(
        <div className="CommonUnit">
          <div className="title"><h1>{title}</h1></div>
          <div className="content">
            {data_lists}
          </div>
        </div>
      );
  }
}

function mapStateToProps(state){
  const common = JSON.parse(JSON.stringify(state.common_unit_state));;
  return {common}
}
export default connect(mapStateToProps)(CommonUnit);