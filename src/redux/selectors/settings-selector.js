export const getIdSelector = (state) => {
   return state.authorization.id;
}

export const getProfileSelector = (state) => {
   return state.profilePage.profile;
}

export const getStatusSelector = (state) => {
   return state.profilePage.status;
}

export const getIsFetchingSelector = (state) => {
   return state.profilePage.isFetching;
}