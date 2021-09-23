import { takeEvery } from 'redux-saga/effects';

import {
   START_NEW_CHAT, handleStartNewChat,
   GET_DIALOGS, handleGetDialogs,
   GET_MESSAGES, handleGetMessages,
   SEND_NEW_MESSAGE, handleSendNewMessage,
   GET_LAST_MESSAGE_STATE, handleGetLastMessageState,
   GET_NEW_MESSAGES_COUNT, handleGetNewMessagesCount
} from '../reducers/messages-reducer.js';

import {
   GET_MEMBERS, handleGetMembers,
   GET_FRIENDS, handleGetFriends,
   GET_NEWCOMERS, handleGetNewcomers,
   FOLLOW, handleFollow,
   UNFOLLOW, handleUnfollow
} from '../reducers/members-reducer';

function* watcherSaga() {
   yield takeEvery(START_NEW_CHAT, handleStartNewChat);
   yield takeEvery(GET_DIALOGS, handleGetDialogs);
   yield takeEvery(GET_MESSAGES, handleGetMessages);
   yield takeEvery(SEND_NEW_MESSAGE, handleSendNewMessage);
   yield takeEvery(GET_LAST_MESSAGE_STATE, handleGetLastMessageState);
   yield takeEvery(GET_NEW_MESSAGES_COUNT, handleGetNewMessagesCount);

   yield takeEvery(GET_MEMBERS, handleGetMembers);
   yield takeEvery(GET_FRIENDS, handleGetFriends);
   yield takeEvery(GET_NEWCOMERS, handleGetNewcomers);
   yield takeEvery(FOLLOW, handleFollow);
   yield takeEvery(UNFOLLOW, handleUnfollow);
}


export default watcherSaga;