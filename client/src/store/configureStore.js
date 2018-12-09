import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMinddleware from 'redux-logger';
import rootReducer from '../reducers/index';
const isDev = process.env.NODE_ENV !== 'production'
const middlewares = [thunkMiddleware];

if (isDev) {
  middlewares.push(loggerMinddleware);
}
const composeEnhancers = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
