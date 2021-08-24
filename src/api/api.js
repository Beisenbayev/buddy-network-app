import * as axios from 'axios';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '2e6bd783-14b7-479d-8cdd-8d45dc3438fc',
   }
});

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
      return instance.put('profile/status', status)
         .then(response => response.data)
   },
   updateAvatarRequest: (avatar) => {
      const formData = new FormData().append("image", avatar);
      return instance.put('profile/photo', formData, {
         headers: { 'Content-Type': 'multipart/form-data' }
      })
         .then(response => response.data)
   },
}