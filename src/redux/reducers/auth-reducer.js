import { call, put } from 'redux-saga/effects';
import { authorizationAPI } from '../../api/api.js';
import { securityAPI } from '../../api/api.js';
import { profileAPI } from '../../api/api.js';
import { startInitializationAC } from './app-reducer.js';

const authID = 'buddy/auth';
export const GET_USER_DATA = `${authID}/GET_USER_DATA`;
export const GET_USER_AVATAR = `${authID}/GET_USER_AVATAR`;
export const GET_CAPTCHA_URL = `${authID}/GET_CAPTCHA_URL`;
export const LOGIN = `${authID}/LOGIN`;
export const LOGOUT = `${authID}/LOGOUT`;
const SET_USER_DATA = `${authID}/SET_USER_DATA`;
const SET_USER_AVATAR = `${authID}/SET_USER_AVATAR`;
const SET_CAPTCHA_URL = `${authID}/SET_CAPTCH_URLA`;
const TOGGLE_IS_SUBMITING = `${authID}/TOGGLE_IS_SUBMITING`;

let initialState = {
   id: null,
   email: null,
   login: null,
   avatar: null,
   captchaUrl: null,
   isSubmiting: false,
   isAuth: false
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return { ...state, ...action.data };
      }
      case SET_USER_AVATAR: {
         return { ...state, avatar: action.avatar };
      }
      case SET_CAPTCHA_URL: {
         return { ...state, captchaUrl: action.captchaUrl };
      }
      case TOGGLE_IS_SUBMITING: {
         return { ...state, isSubmiting: action.isSubmiting };
      }
      default: return state;
   }
}

export const getUserDataAC = () => ({ type: GET_USER_DATA });
export const getUserAvatarAC = (userId) => ({ type: GET_USER_AVATAR, userId });
export const getCaptchaUrlAC = () => ({ type: GET_CAPTCHA_URL });
export const loginAC = (email, password, rememberMe, captcha = null) => ({ type: LOGIN, email, password, rememberMe, captcha });
export const logoutAC = () => ({ type: LOGOUT });
const setUserDataAC = (data) => ({ type: SET_USER_DATA, data });
const setUserAvatarAC = (avatar) => ({ type: SET_USER_AVATAR, avatar });
const setCaptchaUrlAC = (captchaUrl) => ({ type: SET_CAPTCHA_URL, captchaUrl });
const toggleIsSubmitingAC = (isSubmiting) => ({ type: TOGGLE_IS_SUBMITING, isSubmiting });

export function* handleGetUserData({ }) {
   const response = yield call(authorizationAPI.getUserDataRequest);
   const { id, email, login } = response.data;
   if (response.resultCode === 0) {
      yield put(setUserDataAC({ id, email, login, isAuth: true }));
      yield put(getUserAvatarAC(id));
   }
}

export function* handleGetUserAvatar({ userId }) {
   const response = yield call(profileAPI.getProfileRequest, userId);
   yield put(setUserAvatarAC(response.photos.small));
}

export function* hanldeLogin({ email, password, rememberMe, captcha }) {
   yield put(toggleIsSubmitingAC(true));
   const response = yield call(authorizationAPI.loginRequest, email, password, rememberMe, captcha);
   if (response.resultCode === 0) {
      yield put(startInitializationAC());
      yield put(setCaptchaUrlAC(null));
   }
   else {
      if (response.resultCode === 10) yield put(getCaptchaUrlAC());
      const errorMessage = (response.messages.length > 0) && response.messages[0];
   }
   yield put(toggleIsSubmitingAC(false));
}

export function* handleLogout() {
   const response = yield call(authorizationAPI.logoutRequest);
   if (response.resultCode === 0) {
      yield put(setUserDataAC({ id: null, email: null, login: null, isAuth: false }));
      yield put(setCaptchaUrlAC(null));
   }
}

export function* handleGetCaptchaUrl({ }) {
   const response = yield call(securityAPI.getCaptchaUrlRequest);
   yield put(setCaptchaUrlAC(response.url));
}


export default authReducer;