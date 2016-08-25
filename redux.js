import Rx from 'rxjs';

exports.createStore = (reducer) => {
	let subject = new Rx.Subject();
	let state = subject
		.scan((state, action) => {
			return reducer(state, action);
		}, null);

	return {
		getState: () => state,
		subscribe: listener => state.subscribe(listener),
		dispatch: action => state.next(action)
	}
};