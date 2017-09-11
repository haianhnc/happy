import {ActionTypes} from '../core/constants';

export function setCommonUnit(commonunit){
  return{
    type: ActionTypes.SET_COMMON_UNIT,
    commonunit
  };
};