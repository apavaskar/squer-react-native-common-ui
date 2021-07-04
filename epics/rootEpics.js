import {combineEpics} from 'redux-observable';
import {resetDataStartEpic} from '@squer/react-native-common-redux';

export const rootEpic = combineEpics(resetDataStartEpic);
