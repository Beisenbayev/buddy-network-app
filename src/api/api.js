import * as axios from 'axios';

//developver api key
const ApiKey = '2e6bd783-14b7-479d-8cdd-8d45dc3438fc';

//tester api key
//const ApiKey = '508dd49e-ae33-4db2-b811-16b052b7f898';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': ApiKey,
   }
});

//post-create, put-update, get-read, delete

export const securityAPI = {
   getCaptchaUrlRequest: () => {
      return instance.get('/security/get-captcha-url')
         .then(response => response.data);
   },
}

export const authorizationAPI = {
   getUserDataRequest: () => {
      return instance.get('auth/me')
         .then(response => response.data)
   },
   loginRequest: (email, password, rememberMe, captcha) => {
      return instance.post('auth/login', { email, password, rememberMe, captcha })
         .then(response => response.data)
   },
   logoutRequest: () => {
      return instance.delete('auth/login')
         .then(response => response.data)
   },
}

export const membersAPI = {
   getMembersRequest: (count, page, term, friend) => {
      return instance.get(`users?count=${count}&page=${page}&term=${term}&friend=${friend}`)
         .then(response => response.data)
   },
}

export const followAPI = {
   getFollowingInfoRequest: (id) => {
      return instance.get(`follow/${id}`)
         .then(response => response.data)
   },
   followRequest: (id) => {
      return instance.post(`follow/${id}`)
         .then(response => response.data)
   },
   unfollowRequest: (id) => {
      return instance.delete(`follow/${id}`)
         .then(response => response.data)
   },
}

export const profileAPI = {
   getProfileRequest: (id) => {
      return instance.get(`profile/${id}`)
         .then(response => response.data)
   },
   getStatusRequest: (id) => {
      return instance.get(`profile/status/${id}`)
         .then(response => response.data)
   },
   updateProfileRequest: (data) => {
      return instance.put('profile', data)
         .then(response => response.data)
   },
   updateStatusRequest: (status) => {
      return instance.put('profile/status', { status })
         .then(response => response.data)
   },
   updateAvatarRequest: (avatar) => {
      const formData = new FormData();
      formData.append("image", avatar);
      return instance.put('profile/photo', formData, {
         headers: { 'Content-Type': 'multipart/form-data' }
      })
         .then(response => response.data)
   },
}

export const messagesAPI = {
   startСhattingRequest: (userId) => {
      return instance.put(`dialogs/${userId}`)
         .then(response => response.data)
   },
   getDialogsRequest: () => {
      return instance.get('dialogs')
         .then(response => response.data);
   },
   getMessagesRequest: (id, count, page) => {
      return instance.get(`dialogs/${id}/messages?count=${count}&page=${page}`)
         .then(response => response.data)
   },
   sendMessageRequest: (id, text) => {
      return instance.post(`dialogs/${id}/messages`, { body: text })
         .then(response => response.data)
   },
   getMessageStateRequest: (messageId) => { //to show was the message viewed
      return instance.get(`dialogs/messages/${messageId}/viewed`)
         .then(response => response.data)
   },
   deleteMessageRequest: (messageId) => {
      return instance.delete(`dialogs/messages/${messageId}`)
         .then(response => response.data)
   },
   spamMessageRequest: (messageId) => { //spamming useless message
      return instance.post(`dialogs/messages/${messageId}/spam`, {})
         .then(response => response.data)
   },
   restoreMessageRequest: (messageId) => { //restoring deleted or spammed message
      return instance.put(`dialogs/messages/${messageId}/restore`,)
         .then(response => response.data)
   },
   getNewMessagesCountRequest: () => { //for the main page, to show count of users new messages
      return instance.get('dialogs/messages/new/count')
         .then(response => response.data)
   }
}