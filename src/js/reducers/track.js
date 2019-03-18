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
	
	// let new_track = {id: 3, title: 'em cua ngay hom kia'};
	// let adding_current = [...track.tracks, new_track];
	// return adding_current;
	return [...state, ...tracks];
}