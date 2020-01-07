import { Map, List } from 'immutable';
import {
	ADD_TODO,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAIL,
} from '../../actions/action-type';

const initState = Map({
	data: List(),
	loadingStatus: '',
	errorMessage: '',
});

export default function todo(state = initState, action) {
	switch (action.type) {
		case ADD_TODO: {
			return state.set('loadingStatus', 'start');
		}
		case ADD_TODO_SUCCESS: {
			const array = state.get('data').toArray();
			const newAeeay = [...array, action.todo];

			return state
				.set('data', List(newAeeay))
				.set('loadingStatus', 'success');
		}
		case ADD_TODO_FAIL: {
			return state
				.set('errorMessage', action.error)
				.set('loadingStatus', 'failed');
		}
		default: {
			return state;
		}
	}
}