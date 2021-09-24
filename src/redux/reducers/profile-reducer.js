import { call, put, select } from 'redux-saga/effects';
import { followAPI, profileAPI } from '../../api/api.js';
import { getUserAvatarAC } from './auth-reducer.js';

const profileID = 'buddy/profile';
export const GET_PROFILE = `${profileID}/GET_PROFILE`;
export const GET_STATUS = `${profileID}/GET_STATUS`;
export const GET_FOLLOWED = `${profileID}/GET_FOLLOWED`;
export const UPDATE_PROFILE = `${profileID}/UPDATE_PROFILE`;
export const UPDATE_STATUS = `${profileID}/UPDATE_STATUS`;
export const UPDATE_AVATAR = `${profileID}/UPDATE_AVATAR`;
const SET_PROFILE = `${profileID}/SET_PROFILE`;
const SET_STATUS = `${profileID}/SET_STATUS`;
const SET_AVATAR = `${profileID}/SET_AVATAR`;
const SET_FOLLOWED = `${profileID}/SET_FOLLOWED`;
const TOGGLE_IS_FETCHING = `${profileID}/TOGGLE_IS_FETCHING`;

const initialState = {
   profile: [],
   status: null,
   followed: null,
   isFetching: true,
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PROFILE: {
         return { ...state, profile: action.profile };
      }
      case SET_STATUS: {
         return { ...state, status: action.status };
      }
      case SET_AVATAR: {
         return { ...state, profile: { ...state.profile, photos: action.photos } };
      }
      case SET_FOLLOWED: {
         return { ...state, followed: action.followed };
      }
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching };
      }
      default: return state;
   }
}

export const getProfileAC = (userId) => ({ type: GET_PROFILE, userId });
export const getStatusAC = (userId) => ({ type: GET_STATUS, userId });
export const getFollowedAC = (userId) => ({ type: GET_FOLLOWED, userId });
export const updateProfileAC = (data) => ({ type: UPDATE_PROFILE, data });
export const updateStatusAC = (status) => ({ type: UPDATE_STATUS, status });
export const updateAvatarAC = (avatar) => ({ type: UPDATE_AVATAR, avatar });
const setProfileAC = (profile) => ({ type: SET_PROFILE, profile });
const setStatusAC = (status) => ({ type: SET_STATUS, status });
const setAvatarAC = (photos) => ({ type: SET_AVATAR, photos });
const setFollowedAC = (followed) => ({ type: SET_FOLLOWED, followed });
const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export function* handleGetProfile({ userId }) {
   yield put(toggleIsFetchingAC(true));
   const response = yield call(profileAPI.getProfileRequest, userId);
   yield put(setProfileAC(response));
   yield put(getStatusAC(userId));
   yield put(getFollowedAC(userId));
   yield put(toggleIsFetchingAC(false));
}

export function* handleGetStatus({ userId }) {
   const response = yield call(profileAPI.getStatusRequest, userId);
   yield put(setStatusAC(response));
}

export function* handleGetFollowed({ userId }) {
   const response = yield call(followAPI.getFollowingInfoRequest, userId);
   yield put(setFollowedAC(response));
}

export function* handleUpdateProfile({ data }) {
   const select = yield select();
   const response = yield call(profileAPI.updateProfileRequest, data);
   if (response.resultCode === 0) {
      const userId = select.authorization.id;
      yield put(getProfileAC(userId));
   }
   else {
      const errorMessage = (response.messages.length > 0) && response.messages[0];
   }
}

export function* handleUpdateStatus({ status }) {
   const response = yield call(profileAPI.updateStatusRequest, status);
   if (response.resultCode === 0) yield put(setStatusAC(status));
   else {
      const errorMessage = (response.messages.length > 0) && response.messages[0];
   }
}

export function* handleUpdateAvatar({ avatar }) {
   const select = select();
   const userId = select.authorization.id;
   const response = yield call(profileAPI.updateAvatarRequest, avatar);
   if (response.resultCode === 0) {
      yield put(setAvatarAC(response.data.photos));
      //just for experiment, you shoud replace it with callback [setAvatarAC] from auth-reducer
      yield put(getUserAvatarAC(userId));
   } else {
      const errorMessage = (response.messages.length > 0) && response.messages[0];
   }
}


export default profileReducer;