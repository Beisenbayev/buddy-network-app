import { takeEvery } from 'redux-saga/effects';

import {
   START_INITIALIZATION, handleStartInitialization
} from '../reducers/app-reducer.js';

import {
   GET_USER_DATA, handleGetUserData,
   GET_USER_AVATAR, handleGetUserAvatar,
   GET_CAPTCHA_URL, handleGetCaptchaUrl,
   LOGIN, hanldeLogin,
   LOGOUT, handleLogout
} from '../reducers/auth-reducer.js';

import {
   GET_PROFILE, handleGetProfile,
   GET_STATUS, handleGetStatus,
   GET_FOLLOWED, handleGetFollowed,
   UPDATE_PROFILE, handleUpdateProfile,
   UPDATE_STATUS, handleUpdateStatus,
   UPDATE_AVATAR, handleUpdateAvatar,
} from '../reducers/profile-reducer.js';

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
   yield takeEvery(START_INITIALIZATION, handleStartInitialization);

   yield takeEvery(GET_USER_DATA, handleGetUserData);
   yield takeEvery(GET_USER_AVATAR, handleGetUserAvatar);
   yield takeEvery(GET_CAPTCHA_URL, handleGetCaptchaUrl);
   yield takeEvery(LOGIN, hanldeLogin);
   yield takeEvery(LOGOUT, handleLogout);

   yield takeEvery(GET_PROFILE, handleGetProfile);
   yield takeEvery(GET_STATUS, handleGetStatus);
   yield takeEvery(GET_FOLLOWED, handleGetFollowed);
   yield takeEvery(UPDATE_PROFILE, handleUpdateProfile);
   yield takeEvery(UPDATE_STATUS, handleUpdateStatus);
   yield takeEvery(UPDATE_AVATAR, handleUpdateAvatar);

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