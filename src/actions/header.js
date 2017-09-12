import {ActionTypes} from '../core/constants';

export function setHeader(header){
  return{
    type: ActionTypes.SET_HEADER,
    header
  };
};


export function setActiveTab(activeTab){
  return{
    type: ActionTypes.SET_ACTIVE_TAB,
    activeTab
  }
};