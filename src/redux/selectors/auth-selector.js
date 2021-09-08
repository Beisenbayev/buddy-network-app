export const getIdSelector = (state) => {
   return state.authorization.id;
}

export const getEmailSelector = (state) => {
   return state.authorization.email;
} 

export const getLoginSelector = (state) => {
   return state.authorization.login;
}

export const getAvatarSelector = (state) => {
   return state.authorization.avatar;
} 

export const getCaptchaUrlSelector = (state) => {
   return state.authorization.captchaUrl;
} 

export const getIsSubmitingSelector = (state) => {
   return state.authorization.isSubmiting;
}

export const getIsAuthSelector = (state) => {
   return state.authorization.isAuth;
}