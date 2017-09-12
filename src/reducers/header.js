import {ActionTypes} from '../core/constants';

const initialState = [];
export const header_reducer = function(state = initialState, action){
  switch(action.type){
    case ActionTypes.SET_HEADER:
      return setHeader(state, action);
    case ActionTypes.SET_ACTIVE_TAB:
      return setActiveTab(state, action);
  }

  return state;
}

function setHeader(state, action){
  const {header} = action;
  var new_state = Object.assign({}, header);
  state = new_state;
  return state;
}

function setActiveTab(state, action){
  const {activeTab} = action;
  // var new_state = Object.assign({}, {active_tab: activeTab});
  var new_state = {...state, ...{active_tab: activeTab}};
    state = new_state;

  return state;
}