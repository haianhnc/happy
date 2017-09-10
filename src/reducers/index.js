import {combineReducers} from 'redux';
import {header_reducer} from './header';
import {tracks_reducer} from './track'

export const rootReducer = combineReducers({
    header_state: header_reducer,
    tracks_state: tracks_reducer
});