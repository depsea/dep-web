import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { test } from './test';

export const RootReducer = combineReducers({
    test,
    router: routerReducer,
});
