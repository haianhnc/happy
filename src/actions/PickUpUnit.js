import {ActionTypes} from '../core/constants';

export function setPickUpUnit(pickUpUnit){
  return{
    type: ActionTypes.SET_PICKUP_UNIT,
    pickUpUnit
  };
};