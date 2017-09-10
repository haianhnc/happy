import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dechangcum from '../images/dechangcum.jpg'
import crown1 from '../images/crown1.png'
import crown2 from '../images/crown2.png'

class RankRow extends Component {
  static PropTypes = {
    rankrow: PropTypes.object.isRequired
  };

  static defaultProps = {
    rankrow: {no: "", tag: "" }
  };

  render(){
    let row = this.props.rankrow;
    return(
        <div className="RankRow">
          <div className="rank_row_image"><img src={dechangcum} height="30px" width="40px" /></div>
           <div className="rank_row_content">
            <div className="no_and_tag">
              <div className="rank_no">
                <div className="rank_no_image"><img src={crown1} height="10px" /></div>
                <div className="rank_no_tiny_text">No. {row.no}</div>
              </div>
               <div className="rank_tag">{row.tag}</div>
            </div>
            <div className="rank_row_text">
              {row.text}
            </div>
           </div>
        </div>
      );
  }
}

export default RankRow;