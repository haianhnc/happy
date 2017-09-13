import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import {rootReducer} from '../reducers/index';
import thunk from 'redux-thunk'; //import thunk
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../actions/index';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleWare = applyMiddleware(logger, thunk, sagaMiddleware)(createStore);
sagaMiddleware.run(rootSaga); 
export function configureStore(initialState){
  return createStoreWithMiddleWare(rootReducer, initialState);
};