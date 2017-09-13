import {ActionTypes} from '../core/constants';
import getTabList from '../APIFaker/tablist';

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

export function fetchTabListSuccess(data){
  return {
    type: ActionTypes.SET_ACTIVE_TAB_SUCESS,
    data
  }
}

export function fetchTabList(key){
  return (dispatch) => {
    // dispatch()
    getTabList()
      .then((data) => {
        dispatch(fetchTabListSuccess(data))
      }
        )
      .catch((err) => console.log('err:', err))
  }
}

export function fetchTabListBySaga(key){
  return (dispatch) => {
    dispatch(setActiveTab(key))
  }
}