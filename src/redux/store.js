import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import appReducer from './reducers/app-reducer.js';
import authReducer from './reducers/auth-reducer.js';
import profileReducer from './reducers/profile-reducer.js';
import membersReducer from './reducers/members-reducer.js';

const reducers = combineReducers({
   application: appReducer,
   authorization: authReducer,
   profilePage: profileReducer,
   membersPage: membersReducer,
   form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
   applyMiddleware(ThunkMiddleware)
));
window.store = store;


export default store;