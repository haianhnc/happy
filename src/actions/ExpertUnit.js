import {ActionTypes} from '../core/constants';

export function setExpertUnit(expertUnit){
  return{
    type: ActionTypes.SET_EXPERT_UNIT,
    expertUnit
  };
};