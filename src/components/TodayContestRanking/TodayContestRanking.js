import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Starbar from './Starbar'
import ShowMoreButton from './ShowMoreButton'

class TodayContestRanking extends Component {
  static PropTypes = {
    contest: PropTypes.object.isRequired
  };

  static defaultProps = {
    contest: {title: "", user_name: "", star: "", left_icon: "", right_icon: "", contest: ""}
  };

  render(){
    let title = this.props.contest.title;
    let today = new Date();
    let user_name = this.props.contest.name;
    let star = this.props.contest.star;
    let left_icon = this.props.contest.left_icon;
    let right_icon = this.props.contest.right_icon;
    let contest = this.props.contest.content;

    return(
        <div className="contest">
          <div className="ranking">
           
            <div className="img_left"> <img src={require('../images/left.png')} /> </div>
            <div className="contest_body">
              <div className="title"> { title }</div>
              <div className="ranking_date">{today.toLocaleDateString("en-US")}</div>
              <div className="contest_user">{user_name}</div>
              <Starbar star={star}/>
            </div>
            <div className="img_right"> <img src={require('../images/left.png')} /> </div>

          </div>
          <div className="rankingContent">
            {contest}
          </div>
          <ShowMoreButton more="more >>>"/>
        </div>
      );
  }
}

export default TodayContestRanking;