import {ActionTypes} from '../core/constants';

export function setTags(tags){
  return{
    type: ActionTypes.SET_TAGS,
    tags
  };
};