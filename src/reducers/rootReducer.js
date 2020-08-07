import { combineReducers } from 'redux';
import { cookieReducer } from './cookieReducer';

const rootReducer = combineReducers({
  cookieReducer,
});

export { rootReducer };
