import {ActionTypes} from '../core/constants';

export function setRankingUnit(rankingunit){
  return{
    type: ActionTypes.SET_RANKING_UNIT,
    rankingunit
  };
};