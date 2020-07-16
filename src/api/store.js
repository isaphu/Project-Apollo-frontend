import { createStore, combineReducers } from 'redux';

// Reducer
const auth = (state = { user: null}, action ) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload.user };
    case 'LOGOUT':
      localStorage.clear();
      return {...state,  user: null};
    default:
      return state;
  }
};


// Store
export const store = createStore(
  combineReducers({auth})
);
