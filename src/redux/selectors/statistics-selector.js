export const getTotalMembersCountSelector = (state) => {
   return state.membersPage.totalMembersCount;
}

export const getTotalFriendsCountSelector = (state) => {
   return state.membersPage.totalFriendsCount;
}

export const getIsAuthSelector = (state) => {
   return state.authorization.isAuth;
}