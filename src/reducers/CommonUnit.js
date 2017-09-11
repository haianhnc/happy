import {ActionTypes} from '../core/constants';

const initialState = [];
export const common_unit_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_COMMON_UNIT:
      return setCommonUnit(state, action);
  }

  return state;
}

function setCommonUnit(state, action){
  const {commonunit} = action;
  var new_state = JSON.parse(JSON.stringify(commonunit));
  state = new_state;
  return state;
}