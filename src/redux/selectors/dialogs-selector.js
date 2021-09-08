export const getDialogsSelector = (state) => {
   return state.messagesPage.dialogs;
}

export const getIsFetchingSelector = (state) => {
   return state.messagesPage.isFetching;
}
