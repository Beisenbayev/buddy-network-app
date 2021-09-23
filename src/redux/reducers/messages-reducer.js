import { call, put, select } from 'redux-saga/effects';
import { messagesAPI } from '../../api/api.js';

const messagesID = 'buddy/messages';
export const START_NEW_CHAT = `${messagesID}/START_NEW_CHAT`; 
export const GET_DIALOGS = `${messagesID}/GET_DIALOGS`;
export const GET_MESSAGES = `${messagesID}/GET_MESSAGES`;
export const SEND_NEW_MESSAGE = `${messagesID}/SEND_NEW_MESSAGE`;
export const GET_LAST_MESSAGE_STATE = `${messagesID}/GET_LAST_MESSAGE_STATE`;
export const GET_NEW_MESSAGES_COUNT = `${messagesID}/GET_NEW_MESSAGES_COUNT`;
const SET_DIALOGS = `${messagesID}/SET_DIALOGS`;
const SET_MESSAGES = `${messagesID}/SET_MESSAGES`;
const SET_INTERLOCUTOR = `${messagesID}/SET_INTERLOCUTOR`;
const SET_CURRENT_PAGE = `${messagesID}/SET_CURRENT_PAGE`;
const SET_TOTAL_MESSAGES_COUNT = `${messagesID}/SET_TOTAL_MESSAGES_COUNT`;
const SET_LAST_MESSAGE_STATE = `${messagesID}/SET_LAST_MESSAGE_STATE`;
const SET_NEW_MESSAGES_COUNT = `${messagesID}/SET_NEW_MESSAGES_COUNT`;
const TOGGLE_IS_FETCHING = `${messagesID}/TOGGLE_IS_FETCHING`;

const initialState = {
   dialogs: [],
   messages: [],
   currentPage: 1,
   pageMessagesCount: 20,
   totalMessagesCount: null,
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
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage };
      }
      case SET_TOTAL_MESSAGES_COUNT: {
         return { ...state, totalMessagesCount: action.totalMessagesCount };
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

export const startNewChatAC = (userId) => ({type:START_NEW_CHAT, userId});
export const getDialogsAC = () => ({ type: GET_DIALOGS });
export const getMessagesAC = (userId, count, page) => ({ type: GET_MESSAGES, userId, count, page });
export const sendNewMessageAC = (userId, text) => ({ type: SEND_NEW_MESSAGE, userId, text });
export const getLastMessageStateAC = (messageId) => ({ type: GET_LAST_MESSAGE_STATE, messageId });
export const getNewMessagesCountAC = () => ({ type: GET_NEW_MESSAGES_COUNT });
const setDialogsAC = (dialogs) => ({ type: SET_DIALOGS, dialogs });
const setMessagesAC = (messages) => ({ type: SET_MESSAGES, messages });
const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalMessagesCountAC = (totalMessagesCount) => ({ type: SET_TOTAL_MESSAGES_COUNT, totalMessagesCount });
const setLastMessageStateAC = (lastMessageState) => ({ type: SET_LAST_MESSAGE_STATE, lastMessageState });
const setNewMessagesCountAC = (newMessagesCount) => ({ type: SET_NEW_MESSAGES_COUNT, newMessagesCount });
const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export function* handleStartNewChat ({userId}) {
   yield call(messagesAPI.startСhattingRequest, userId);
   yield put(getDialogsAC());
}

export function* handleGetDialogs({ }) {
   yield put(toggleIsFetchingAC(true));
   const response = yield call(messagesAPI.getDialogsRequest);
   yield put(setDialogsAC(response));
   yield put(toggleIsFetchingAC(false));
}

export function* handleGetMessages({ userId, count, page }) {
   yield put(toggleIsFetchingAC(true));
   const response = yield call(messagesAPI.getMessagesRequest, userId, count, page);
   yield put(setMessagesAC(response.items));
   yield put(setTotalMessagesCountAC(response.totalCount));
   yield put(setCurrentPageAC(page));
   yield put(toggleIsFetchingAC(false));
}

export function* handleSendNewMessage({ userId, text }) {
   const state = yield select();
   const messagesCount = state.messagesPage.pageMessagesCount;
   const response = yield call(messagesAPI.sendMessageRequest, userId, text);
   if (response.resultCode === 0) {
      yield put(getMessagesAC(userId, messagesCount, 1));
   }
}

export function* handleGetLastMessageState({ messageId }) {
   const response = yield call(messagesAPI.getMessageStateRequest, messageId);
   yield put(setLastMessageStateAC(response));
}

export function* handleGetNewMessagesCount({ }) {
   const response = yield call(messagesAPI.getNewMessagesCountRequest);
   yield put(setNewMessagesCountAC(response));
}


export default messagesReducer;