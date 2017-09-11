import {ActionTypes} from '../core/constants';

const initState = [];

export const tracks_reducer =function(state = initState, action){
	switch(action.type){
		case ActionTypes.TRACKS_SET: 
			return setTracks(state, action);
	}
	return state;
}

function setTracks(state, action){
	// debugger;
	const {tracks} = action;
	
	return [...state, ...tracks];
}