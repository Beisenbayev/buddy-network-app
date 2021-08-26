import { messagesAPI } from '../../api/api.js';

const messagesID = 'buddy/messages';
const SET_DIALOGS = `${messagesID}/SET_DIALOGS`;
const SET_MESSAGES = `${messagesID}/SET_MESSAGES`;
const SET_LAST_MESSAGE_STATE = `${messagesID}/SET_LAST_MESSAGE_STATE`;
const SET_NEW_MESSAGES_COUNT = `${messagesID}/SET_NEW_MESSAGES_COUNT`;
const TOGGLE_IS_FETCHING = `${messagesID}/TOGGLE_IS_FETCHING`;

const initialState = {
   dialogs: [],
   messages: [],
   lastMessageState: null,
   newMessagesCount: 0,
   isFetching: true,
}

const messagesReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_DIALOGS: {
         return { ...state, dialogs: action.dialogs };
      }
      case SET_MESSAGES: {
         return { ...state, messages: action.messages };
      }
      case SET_LAST_MESSAGE_STATE: {
         return { ...state, lastMessageState: action.lastMessageState };
      }
      case SET_NEW_MESSAGES_COUNT: {
         return { ...state, newMessagesCount: action.newMessagesCount };
      }
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching };
      }
      default: return state;
   }
}

const setDialogsAC = (dialogs) => ({ type: SET_DIALOGS, dialogs });
const setMessagesAC = (messages) => ({ type: SET_MESSAGES, messages });
const setLastMessageStateAC = (lastMessageState) => ({ type: SET_LAST_MESSAGE_STATE, lastMessageState });
const setNewMessagesCountAC = (newMessagesCount) => ({ type: SET_NEW_MESSAGES_COUNT, newMessagesCount });
const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setDialogsThunkCreater = () => {
   return async (dispatch) => {
      dispatch(toggleIsFetchingAC(true));
      const response = await messagesAPI.getDialogsRequest();
      dispatch(setDialogsAC(response));
      dispatch(toggleIsFetchingAC(false));
   }
}

export const setMessagesThunkCreater = (userId, count, page) => {
   return async (dispatch) => {
      dispatch(toggleIsFetchingAC(true));
      const response = await messagesAPI.getMessagesRequest(userId, count, page);
      dispatch(setMessagesAC(response));
      dispatch(toggleIsFetchingAC(false));
   }
}

export const setLastMessageStateThunkCreater = (messageId) => {
   return async (dispatch) => {
      const response = await messagesAPI.getMessageStateRequest(messagesAPI);
      dispatch(setLastMessageStateAC(response));
   }
}

export const setNewMessagesCountThunkCreater = () => {
   return async (dispatch) => {
      const response = await messagesAPI.getNewMessagesCountRequest();
      dispatch(setNewMessagesCountAC(response));
   }
}


export default messagesReducer;