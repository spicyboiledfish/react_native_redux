import { createStore } from 'redux';
import Reducer from './src/Reducer/index';

const store = createStore(Reducer);

export default store;