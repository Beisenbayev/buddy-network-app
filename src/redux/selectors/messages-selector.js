export const getDialogsSelector = (state) => {
   return state.messagesPage.dialogs;
}

export const getMessagesSelector = (state) => {
   return state.messagesPage.messages;
}

export const getCurrentPageSelector = (state) => {
   return state.messagesPage.currentPage;
}

export const getPageMessagesCountSelector = (state) => {
   return state.messagesPage.pageMessagesCount;
}

export const getTotalMessagesCountSelector = (state) => {
   return state.messagesPage.totalMessagesCount;
}

export const getLastMessageStateSelector = (state) => {
   return state.messagesPage.lastMessageState;
}

export const getNewMessagesCountSelector = (state) => {
   return state.messagesPage.newMessagesCount;
}

export const getIsFetchingSelector = (state) => {
   return state.messagesPage.isFetching;
}