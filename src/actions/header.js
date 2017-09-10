import {ActionTypes} from '../core/constants';

export function setHeader(header){
  return{
    type: ActionTypes.SET_HEADER,
    header
  };
};