import { fork, takeLatest, put, call, takeEvery } from 'redux-saga/effects';

import {setTracks} from './tracks';
import {setHeader} from './header';
import {setTodayContestRanking} from './TodayContestRanking';
import {setPickUpUnit} from './PickUpUnit';
import {setTodayBestFriend} from './TodayBestFriend';
import {setRankingUnit} from './RankingUnit';
import {setCommonUnit} from './CommonUnit';
import {setPsychological} from './Psychological';
import {setExpertUnit} from './ExpertUnit';
import {setTags} from './Tags';


import {fetchTabList} from './header';
import {setActiveTab} from './header';

// import {fetchTabListSaga} from './header'
import "regenerator-runtime/runtime";

export {
	setTracks,
  setHeader,
  setTodayContestRanking,
  setPickUpUnit,
  setTodayBestFriend,
  setRankingUnit,
  setCommonUnit,
  setPsychological,
  setExpertUnit,
  setTags,
  setActiveTab,
  fetchTabList
};


export function* rootSaga(){
  yield[
    takeLatest(ActionTypes.SET_ACTIVE_TAB, fetchTabListSaga())
  ];
}

export function* fetchTabListSaga(key){
  try{
    debugger;
    const data = yield call(getTabList);
    yield put({type: ActionTypes.SET_ACTIVE_TAB_SUCESS, data});
  }catch(exception){
    yield put({type: ActionTypes.SET_ACTIVE_TAB_FAILURE, exception });
  }
}