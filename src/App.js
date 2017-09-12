import React, { Component } from 'react';
import {Provider} from 'react-redux';

//Store, actions
import * as actions from './actions';
import {configureStore} from './stores/index';


//Component
// import Header from './components/Header/Header';
// import TodayContestRanking from "./components/TodayContestRanking/TodayContestRanking"
// import PickUpUnit from "./components/PickUpUnit/PickUpUnit"
// import TodayBestFriend from "./components/TodayBestFriend/TodayBestFriend"
// import RankingUnit from "./components/RankingUnit/RankingUnit"
// import CommonUnit from "./components/CommonUnit/CommonUnit"
// import Psychological from "./components/Psychological/Psychological"
// import ExpertUnit from "./components/ExpertUnit/ExpertUnit"
// import Tags from "./components/Tags/Tags"

import HeaderContainer from './containers/Header/HeaderContainer';
import CommonUnitContainer from './containers/CommonUnit/CommonUnitContainer';
import TodayContestRankingContainer from './containers/TodayContestRanking/TodayContestRankingContainer';
import PickUpUnitContainer from './containers/PickUpUnit/PickUpUnitContainer';
import TodayBestFriendContainer from './containers/TodayBestFriend/TodayBestFriendContainer';
import RankingUnitContainer from './containers/RankingUnit/RankingUnitContainer';
import PsychologicalContainer from './containers/Psychological/PsychologicalContainer';
import ExpertUnitContainer from './containers/ExpertUnit/ExpertUnitContainer';
import TagsContainer from './containers/Tags/TagsContainer';

import style from './App.css';



var HEADER = {title: 'Happy', menu_list: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'], left_menu_button: 'left_menu.png', close_button: 'close_button.png', active_tab: 0}
var CONTEST = {title: 'today fortune', name: 'AAAAA', left_icon: '../images/left.png', right_icon: '../images/left.png', star: '3', content: 'you are lucky'}
var PICKUPUNIT = {title: 'Pick up', first_feature_banner: {baner: 'baner.jpg', text: 'description for baner better than ever! do you see it?'}, data: [{image: 'row.jpg', tag: 'sport', text: 'this is a sample text for row. I love it, do you love it.'}, {image: 'row.jpg', tag: 'sport', text: 'this is a sample text for row'}, {image: 'row.jpg', tag: 'sport', text: 'this is a sample text for row'}, {image: 'row.jpg', tag: 'sport', text: 'this is a sample text for row'}] }
var BESTFRIEND = {title: 'best friends', user: {icon: 'user.jpg', name: 'user1'}, heart: '4', percent: '100', text: 'this is best friend' }
var RANKINGUNIT = {title: 'ranking unit', rank_rows: [{image: 'ileft.png', no: '1', tag: 'Food', text: 'this description is very long'}, {image: 'ileft.png', no: '2', tag: 'Food', text: 'this description is very long'}, {image: 'ileft.png', no: '3', tag: 'Food', text: 'this description is very long'},{image: 'ileft.png', no: '4', tag: 'Food', text: 'this description is very long'},{image: 'ileft.png', no: '5', tag: 'Food', text: 'this description is very long'}]}
var COMMON = {title: 'foryou', vertical_units: [{icon: 'icon1.jpg', content: 'this is a description1 and it is very long', heart_text: 'heart text'}, {icon: 'icon1.jpg', content: 'this is a description1', heart_text: 'heart text'} ]}
var PSYCHOLOICAL = {title: 'psychological unit', holizo_units: [{icon: 'icon.jpg', content: 'psychological content'}, {icon: 'icon.jpg', content: 'psychological content2 xxxewqrewrqwedsafwerq'}]}
var EXPERTS = {title: 'Writer', cicler_units: [{icon: 'icon.jpg', content: 'an expert do best things'}, {icon: 'icon.jpg', content: 'an expert do best things 2222'}]}
var TAGS = {title: 'tag', tags: ['tag1', 'tag2', 'tag3', 'tag4']}



const store = configureStore();
// store.dispatch(actions.setHeader(HEADER));
store.dispatch(actions.setTodayContestRanking(CONTEST));
store.dispatch(actions.setPickUpUnit(PICKUPUNIT));
store.dispatch(actions.setTodayBestFriend(BESTFRIEND));
store.dispatch(actions.setRankingUnit(RANKINGUNIT));
store.dispatch(actions.setCommonUnit(COMMON));
store.dispatch(actions.setPsychological(PSYCHOLOICAL));
store.dispatch(actions.setExpertUnit(EXPERTS));
store.dispatch(actions.setTags(TAGS));


class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <HeaderContainer />
          <TodayContestRankingContainer />
          <PickUpUnitContainer />
          <TodayBestFriendContainer />
          <RankingUnitContainer />
          <CommonUnitContainer />
          <PsychologicalContainer />
          <ExpertUnitContainer />
          <TagsContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
