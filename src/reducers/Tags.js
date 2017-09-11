import {ActionTypes} from '../core/constants';

const initialState = [];
export const tags_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_TAGS:
      return setTags(state, action);
  }

  return state;
}

function setTags(state, action){
  const {tags} = action;
   var new_state = JSON.parse(JSON.stringify(tags));
  state = new_state;
  return state;
}