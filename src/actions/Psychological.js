import {ActionTypes} from '../core/constants';

export function setPsychological(psychological){
  return{
    type: ActionTypes.SET_PSYCHOLOICAL,
    psychological
  };
};