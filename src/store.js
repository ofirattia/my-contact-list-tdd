import { combineReducers, createStore, applyMiddleware } from 'redux';
import contactListApp from './reducers/';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  contactListApp
});

export default createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));
