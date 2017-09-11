import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  


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
    let title = this.props.todaybestfriend.title;
    let user = this.props.todaybestfriend.user;
    let heart = this.props.todaybestfriend.heart;
    let percent = this.props.todaybestfriend.percent;
    let text = this.props.todaybestfriend.text;
    
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

// export default TodayBestFriend;

function mapStateToProps(state){
  const todaybestfriend = JSON.parse(JSON.stringify(state.today_best_friend_state));;
  return {todaybestfriend}
}
export default connect(mapStateToProps)(TodayBestFriend);