import {ActionTypes} from '../core/constants';

const initialState = [];
export const header_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_HEADER:
      return setHeader(state, action);
  }

  return state;
}

function setHeader(state, action){
  const {header} = action;
  var new_state = Object.assign({}, header);

  return new_state;
}