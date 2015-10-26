/**
 * test reducer
 */

import {
	LOGGED,
	LOGOUT,
	RECEIVE_INVITATION,
	INVITATION_ANSWERED
} from '../actions/reach';

const initialState = {
	logged: false,
	username: '',
	invitation: null
}

export default function main(state = initialState, action = {}) {
	switch (action.type) {
	case LOGGED:
		return {
			...state,
			logged: true,
			username: action.data
		};
	case RECEIVE_INVITATION:
		return {
			...state,
			invitation: action.data
		};
	case INVITATION_ANSWERED:
		return {
			...state,
			invitation: null
		};
	case LOGOUT:
		return {
			...initialState
		};
	default:
		return state;
	}
}