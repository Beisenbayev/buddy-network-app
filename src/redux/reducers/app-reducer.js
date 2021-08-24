import { setUserDataThunkCreater } from './auth-reducer.js';
import { setFriendsThunkCreater } from './members-reducer.js';
import { setNewcomersThunkCreater } from './members-reducer.js';

const INITIALIZATION = 'buddy/INITIALIZATION';

const initialState = {
   initialized: false,
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZATION: {
         return { ...state, initialized: true };
      }
      default: return state;
   }
}

const initializeAC = () => ({ type: INITIALIZATION });

export const initializeThunkCreate = () => {
   return (dispatch) => {

      Promise.all([
         dispatch(setUserDataThunkCreater()),
         dispatch(setFriendsThunkCreater(5, 1)),
         dispatch(setNewcomersThunkCreater(5))
      ])
         .then(() => dispatch(initializeAC()));
   }
};


export default appReducer;