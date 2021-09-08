export const getCaptchaUrlSelector = (state) => {
   return state.authorization.captchaUrl;
}

export const getIsSubmitingSelector = (state) => {
   return state.authorization.isSubmiting;
}

export const getIsAuthSelector = (state) => {
   return state.authorization.isAuth;
}