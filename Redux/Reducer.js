/* eslint-disable no-fallthrough */
import Fake_Post from '../Component/Fake_Post';
import {combineReducers} from 'redux';

const initialState = {
  data: Fake_Post,
  likes: [],
  token: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE':
      if (!state.likes.includes(action.payload)) {
        return {
          ...state,
          likes: state.likes.concat(action.payload),
          // likes: action.payload,
        };
      }

    case 'DISS_LIKE':
      return {
        ...state,
        likes: state.likes.filter(f => f !== action.payload),
      };
    case 'LOGIN':
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

const allReducer = combineReducers({
  data: Reducer,
});
export default allReducer;
