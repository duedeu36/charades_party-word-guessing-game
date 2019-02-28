import { combineReducer, combineReducers } from 'redux';
import reducer1 from '../../src/reducers/reducer1';
// import reducer2 from './reducer2';

export default combineReducers({
  reducer1: reducer1
  // reducer2: reducer2
});
