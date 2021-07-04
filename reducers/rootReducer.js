import {combineReducers} from 'redux';
import {spinnerReducer} from '@squer/react-native-common-redux';

const rootReducer = combineReducers({
  spinner: spinnerReducer,
});

export default rootReducer;
