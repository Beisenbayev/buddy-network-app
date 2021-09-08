export const getIdSelector = (state) => {
   return state.authorization.id;
}

export const getLoginSelector = (state) => {
   return state.authorization.login;
}

export const getAvatarSelector = (state) => {
   return state.authorization.avatar;
}

export const getIsAuthSelector = (state) => {
   return state.authorization.isAuth;
}