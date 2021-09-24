import { all, put } from 'redux-saga/effects';
import { getUserDataAC } from './auth-reducer.js';
import { getFriendsAC } from './members-reducer.js';
import { getNewcomersAC } from './members-reducer.js';
import { getNewMessagesCountAC } from './messages-reducer.js';

const appId = 'buddy/appId';
export const START_INITIALIZATION = `${appId}/START_INITIALIZATION`;
const CONFIRM_INITIALIZATION = `${appId}/CONFIRM_INITIALIZATION`;

const initialState = {
   initialized: false,
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case CONFIRM_INITIALIZATION: {
         return { ...state, initialized: true };
      }
      default: return state;
   }
}

export const startInitializationAC = () => ({ type: START_INITIALIZATION });
const confirmInitializeAC = () => ({ type: CONFIRM_INITIALIZATION });

export function* handleStartInitialization({ }) {
   yield all([
      put(getUserDataAC()),
      put(getFriendsAC(5, 1)),
      put(getNewcomersAC(5)),
      put(getNewMessagesCountAC())
   ]);
   yield put(confirmInitializeAC());
}


export default appReducer;