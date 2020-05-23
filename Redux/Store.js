import {createStore} from 'redux';
import allReducer from './Reducer';

const store = createStore(allReducer);

export default store;
