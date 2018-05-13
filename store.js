import { createStore } from 'redux';
import Reducer from './src/Reducer/index';
import addReducer from './src/Reducer/addReducer';

const store = createStore(Reducer);

export default store;