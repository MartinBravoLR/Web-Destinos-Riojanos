// Constantes

const SET_PAGE_NAME = "SET_PAGE_NAME";

// State inicial
const stateInitial = {
	pageTitle: "Turist",
};

// Selectores
export const appSelector = {
	todo: (state) => state.todo,
	pageTitle: (state) => state.pageTitle,
};

// Actions
export const appActions = {
	setPageTitle: (title) => ({
		type: SET_PAGE_NAME,
		title,
	}),

	loading: (payload) => ({
		type: "LOADING",
		payload,
	}),
};

// Reducer
export const appReducer = (state = stateInitial, action) => {
	switch (action.type) {
		case "LOADING":
			return {
				...state,
				loading: action.payload,
			};
			
		default:
			return state;
	}
}