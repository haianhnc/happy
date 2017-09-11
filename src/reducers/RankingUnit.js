import {ActionTypes} from '../core/constants';

const initialState = [];
export const today_ranking_unit_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_RANKING_UNIT:
      return setRankingUnit(state, action);
  }

  return state;
}

function setRankingUnit(state, action){
  const {rankingunit} = action;
  var new_state = JSON.parse(JSON.stringify(rankingunit));
  state = new_state;
  return state;
}