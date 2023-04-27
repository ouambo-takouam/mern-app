import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext([]);

export function WorkoutsProvider({ children }) {
	const [workouts, dispatch] = useReducer(workoutsReducer, initialWorkouts);

	return (
		<WorkoutsContext.Provider value={[workouts, dispatch]}>
			{children}
		</WorkoutsContext.Provider>
	);
}

function workoutsReducer(workouts, action) {
	const { type, payload } = action;

	switch (type) {
		case 'added': {
			return [...workouts, payload];
		}

		case 'collection': {
			return payload;
		}
		default: {
			throw Error('Unknown action: ' + type);
		}
	}
}

const initialWorkouts = [];
