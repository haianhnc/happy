import {ActionTypes} from '../core/constants';

export function setTodayBestFriend(todaybestfriend){
  return{
    type: ActionTypes.SET_TODAY_BEST_FRIEND,
    todaybestfriend
  };
};