import {ActionTypes} from '../core/constants';

const initialState = [];
export const pickup_unit_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_PICKUP_UNIT:
      return setPickupUnit(state, action);
  }

  return state;
}

function setPickupUnit(state, action){
  const {pickUpUnit} = action;
  var new_state = JSON.parse(JSON.stringify(pickUpUnit));
  state = new_state;
  return state;
}