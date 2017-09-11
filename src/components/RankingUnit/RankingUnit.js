import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RankRow from "./RankRow"
export class RankingUnit extends Component {
  static PropTypes = {
    rankingunit: PropTypes.object.isRequired
  };

  static defaultProps = {
    pickupunit: {title: "", first_feature_banner: "", data_rows: [] }
  };

  render(){
    let title = this.props.rankingunit.title;
    let rank_rows = this.props.rankingunit.rank_rows;
    let data_lists = [];

    rank_rows.forEach(function(row, key){
      data_lists.push(<RankRow key={key} rankrow={row} />);
    });

    return(
        <div className="RankingUnit">
          <div className="title"><h1>{title}</h1></div>
          <div className="rank_rows">
            {data_lists}
          </div>
        </div>
      );
  }
}