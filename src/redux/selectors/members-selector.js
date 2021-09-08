export const getMembersSelector = (state) => {
   return state.membersPage.members;
}

export const getCurrentPageSelector = (state) => {
   return state.membersPage.currentPage;
}

export const getPageItemsCountSelector = (state) => {
   return state.membersPage.pageItemsCount;
}

export const getTotalItemsCountSelector = (state) => {
   return state.membersPage.totalItemsCount;
}

export const getTotalMembersCountSelector = (state) => {
   return state.membersPage.totalMembersCount;
}

export const getTotalFriendsCountSelector = (state) => {
   return state.membersPage.totalFriendsCount;
}

export const getMembersTypeSelector = (state) => {
   return state.membersPage.membersType;
}

export const getSearchTermSelector = (state) => {
   return state.membersPage.searchTerm;
}

export const getFollowingInProgressSelector = (state) => {
   return state.membersPage.followingInProgress;
}

export const getIsFetchingSelector = (state) => {
   return state.membersPage.isFetching;
}

export const getIsAuthSelector = (state) => {
   return state.authorization.isAuth;
}