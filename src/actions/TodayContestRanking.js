import {ActionTypes} from '../core/constants';

export function setTodayContestRanking(contestRanking){
  return{
    type: ActionTypes.SET_CONTEST_RANKING,
    contestRanking
  };
};