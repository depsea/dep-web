import { routerMiddleware } from 'react-router-redux';
import { RootReducer } from 'reducers';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { history } from 'router';

export const store = createStore(RootReducer, applyMiddleware(
    routerMiddleware(history),
    createLogger(),
));
