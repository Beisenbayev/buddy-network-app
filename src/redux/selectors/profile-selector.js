export const getIdSelector = (state) => {
   return state.authorization.id;
}

export const getProfileSelector = (state) => {
   return state.profilePage.profile;
}

export const getStatusSelector = (state) => {
   return state.profilePage.status;
}

export const getFollowedSelector = (state) => {
   return state.profilePage.followed;
}

export const getFollowingInProgressSelector = (state) => {
   return state.membersPage.followingInProgress;
}

export const getIsFetchingSelector = (state) => {
   return state.profilePage.isFetching;
}

export const getIsAuthSelector = (state) => {
   return state.authorization.isAuth;
}