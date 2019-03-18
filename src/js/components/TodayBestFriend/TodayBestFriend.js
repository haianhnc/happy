import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeartBar from './HeartBar'
import GotoLineButton from './GotoLineButton'

import user_icon from '../images/user_icon.png'

class TodayBestFriend extends Component {
  static PropTypes = {
    bestfriend: PropTypes.object.isRequired
  };

  static defaultProps = {
    bestfriend: {title: "", user: {}, heart: 5, text: ""}
  };

  render(){
    let title = this.props.bestfriend.title;
    let user = this.props.bestfriend.user;
    let heart = this.props.bestfriend.heart;
    let percent = this.props.bestfriend.percent;
    let text = this.props.bestfriend.text;
    
    return(
        <div className="TodayBestFriend">
          <div className="title"><h1>{title}</h1></div>
          <div className="content">
            <div className="user_icon"><img src={user_icon} height="40" width="40" /></div>
            <div className="user_info">
              <div className="name">{user.name}</div>
              <div className="heart"><HeartBar heart={heart} /></div>
              <GotoLineButton more={text} />
            </div>
            <div className="user_percent">{percent}%</div>
          </div>
        </div>
      );
  }
}

export default TodayBestFriend;