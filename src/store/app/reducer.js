import { actionTypes } from './actions';

const initialState = {
    theme: 'dark'
};

const app = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};

export default app;
