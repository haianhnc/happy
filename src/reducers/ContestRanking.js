import {ActionTypes} from '../core/constants';

const initialState = [];
export const today_contest_ranking_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_CONTEST_RANKING:
      return setTodayContestRanking(state, action);
  }

  return state;
}

function setTodayContestRanking(state, action){
  const {contestRanking} = action;
  var new_state = JSON.parse(JSON.stringify(contestRanking));
  state = new_state;
  return state;
}