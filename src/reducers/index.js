import { combineReducers } from 'redux';
import modalOpen from './modalOpen';
import renderMode from './renderMode';

const rootReducer = combineReducers({
  modalOpen,
  renderMode
});

export default rootReducer;
