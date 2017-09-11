import {ActionTypes} from '../core/constants';

const initialState = [];
export const expert_unit_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_EXPERT_UNIT:
      return setExpertUnit(state, action);
  }

  return state;
}

function setExpertUnit(state, action){
  const {expertUnit} = action;
  var new_state = JSON.parse(JSON.stringify(expertUnit));
  state = new_state;
  return state;
}