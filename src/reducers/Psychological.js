import {ActionTypes} from '../core/constants';

const initialState = [];
export const psychological_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_PSYCHOLOICAL:
      return setPsychological(state, action);
  }

  return state;
}

function setPsychological(state, action){
  const {psychological} = action;
  var new_state = JSON.parse(JSON.stringify(psychological));
  state = new_state;
  return state;
}