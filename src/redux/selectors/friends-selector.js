export const getFriendsSelector = (state) => {
   return state.membersPage.friends;
}

export const getIsAuthSelector = (state) => {
   return state.authorization.isAuth;
}