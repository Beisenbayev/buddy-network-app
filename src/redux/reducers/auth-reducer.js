import { authorizationAPI } from '../../api/api.js';
import { securityAPI } from '../../api/api.js';
import { profileAPI } from '../../api/api.js';
import { initializeThunkCreate } from './app-reducer.js';

const authID = 'buddy/auth';
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

const setUserDataAC = (data) => ({ type: SET_USER_DATA, data });
const setUserAvatarAC = (avatar) => ({ type: SET_USER_AVATAR, avatar });
const setCaptchaUrlAC = (captchaUrl) => ({ type: SET_CAPTCHA_URL, captchaUrl });
const toggleIsSubmitingAC = (isSubmiting) => ({ type: TOGGLE_IS_SUBMITING, isSubmiting });

export const setUserDataThunkCreater = () => {
   return async (dispatch) => {
      const response = await authorizationAPI.getUserDataRequest();
      const { id, email, login } = response.data;
      if (response.resultCode === 0) {
         dispatch(setUserDataAC({ id, email, login, isAuth: true }));
         dispatch(setUserAvatarThunkCreater(id));
      }
   }
}

export const setUserAvatarThunkCreater = (id) => {
   return async (dispatch) => {
      const response = await profileAPI.getProfileRequest(id);
      dispatch(setUserAvatarAC(response.photos.small));
   }
}
// use promise reject( error message ), if resultCode != 0
export const loginThunkCreater = (email, password, rememberMe, captcha = null) => {
   return async (dispatch) => {
      dispatch(toggleIsSubmitingAC(true));
      const response = await authorizationAPI.loginRequest(email, password, rememberMe, captcha);
      if (response.resultCode === 0) {
         dispatch(initializeThunkCreate());
         dispatch(setCaptchaUrlAC(null));
      }
      else {
         if (response.resultCode === 10) dispatch(setCaptchaUrlThunkCreater());
         const errorMessage = (response.messages.length > 0) && response.messages[0];
      }
      dispatch(toggleIsSubmitingAC(false));
   }
}

export const logoutThunkCreater = () => {
   return async (dispatch) => {
      const response = await authorizationAPI.logoutRequest();
      if (response.resultCode === 0) {
         dispatch(setUserDataAC({ id: null, email: null, login: null, isAuth: false }));
         dispatch(setCaptchaUrlAC(null));
      }
   }
}

export const setCaptchaUrlThunkCreater = () => {
   return async (dispatch) => {
      const response = await securityAPI.getCaptchaUrlRequest();
      dispatch(setCaptchaUrlAC(response.url));
   }
}


export default authReducer;