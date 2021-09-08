export const getProfileSelector = (state) => {
   return state.profilePage.profile;
}

export const getStatusSelector = (state) => {
   return state.profilePage.status;
}

export const getFollowedSelector = (state) => {
   return state.profilePage.followed;
}

export const getIsFetchingSelector = (state) => {
   return state.profilePage.isFetching;
}