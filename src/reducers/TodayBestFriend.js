import {ActionTypes} from '../core/constants';

const initialState = [];
export const today_best_friend_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_TODAY_BEST_FRIEND:
      return setTodayBestFriend(state, action);
  }

  return state;
}

function setTodayBestFriend(state, action){
  const {todaybestfriend} = action;
   var new_state = JSON.parse(JSON.stringify(todaybestfriend));
  state = new_state;
  return state;
}