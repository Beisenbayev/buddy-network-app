import { call, put } from 'redux-saga/effects';
import { membersAPI, followAPI } from '../../api/api.js';
import { getFollowedAC } from './profile-reducer';

const membersID = 'buddy/members';
export const GET_MEMBERS = `${membersID}/GET_MEMBERS`;
export const GET_FRIENDS = `${membersID}/GET_FRIENDS`;
export const GET_NEWCOMERS = `${membersID}/GET_NEWCOMERS`;
export const FOLLOW = `${membersID}/FOLLOW`;
export const UNFOLLOW = `${membersID}/UNFOLLOW`;
const SET_MEMBERS = `${membersID}/SET_MEMBERS`;
const SET_FRIENDS = `${membersID}/SET_FRIENDS`;
const SET_NEWCOMERS = `${membersID}/SET_NEWCOMERS`;
const SET_CURRENT_PAGE = `${membersID}/SET_CURRENT_PAGE`;
const SET_TOTAL_ITEMS_COUNT = `${membersID}/SET_TOTAL_ITEMS_COUNT`;
const SET_TOTAL_MEMBERS_COUNT = `${membersID}/SET_TOTAL_MEMBERS_COUNT`;
const SET_TOTAL_FRIENDS_COUNT = `${membersID}/SET_TOTAL_FRIENDS_COUNT`;
const SET_MEMBERS_TYPE = `${membersID}/SET_MEMBERS_TYPE`;
const SET_SEARCH_TERM = `${membersID}/SET_SEARCH_TERM`;
const TOGGLE_FOLLOWING = `${membersID}/TOGGLE_FOLLOWING`;
const TOGGLE_FOLLOWING_PROGRESS = `${membersID}/TOGGLE_FOLLOWING_PROGRESS`;
const TOGGLE_IS_FETCHING = `${membersID}/TOGGLE_IS_FETCHING`;

const initialState = {
   members: [],
   friends: [],
   newcomers: [],
   currentPage: 1,
   pageItemsCount: 100,
   totalItemsCount: null,
   totalMembersCount: null,
   totalFriendsCount: null,
   membersType: null, //null-all members, true-only friends, false-none friends
   searchTerm: '',
   followingInProgress: [],
   isFetching: true
}

const membersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_MEMBERS: {
         return { ...state, members: action.members };
      }
      case SET_FRIENDS: {
         return { ...state, friends: action.friends };
      }
      case SET_NEWCOMERS: {
         return { ...state, newcomers: action.newcomers };
      }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage };
      }
      case SET_TOTAL_ITEMS_COUNT: {
         return { ...state, totalItemsCount: action.totalItemsCount };
      }
      case SET_TOTAL_MEMBERS_COUNT: {
         return { ...state, totalMembersCount: action.totalMembersCount }
      }
      case SET_TOTAL_FRIENDS_COUNT: {
         return { ...state, totalFriendsCount: action.totalFriendsCount };
      }
      case SET_MEMBERS_TYPE: {
         return { ...state, membersType: action.membersType };
      }
      case SET_SEARCH_TERM: {
         return { ...state, searchTerm: action.searchTerm };
      }
      case TOGGLE_FOLLOWING: {
         return {
            ...state,
            members: state.members.map(member => {
               if (member.id === action.id) return { ...member, followed: action.followed };
               return member;
            }),
         }
      }
      case TOGGLE_FOLLOWING_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.followingInProgress ?
               [...state.followingInProgress, action.id] :
               state.followingInProgress.filter(id => id !== action.id)
         };
      }
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching };
      }
      default: return state
   }
}


export const getMembersAC = (count, page, term, friend) => ({ type: GET_MEMBERS, count, page, term, friend });
export const getFriendsAC = (count, page) => ({ type: GET_FRIENDS, count, page });
export const getNewcomersAC = (count) => ({ type: GET_NEWCOMERS, count });
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
const setMembersAC = (members) => ({ type: SET_MEMBERS, members });
const setFriendsAC = (friends) => ({ type: SET_FRIENDS, friends });
const setNewcomersAC = (newcomers) => ({ type: SET_NEWCOMERS, newcomers });
const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalItemsCountAC = (totalItemsCount) => ({ type: SET_TOTAL_ITEMS_COUNT, totalItemsCount });
const setTotalMembersCountAC = (totalMembersCount) => ({ type: SET_TOTAL_MEMBERS_COUNT, totalMembersCount });
const setTotalFriendsCountAC = (totalFriendsCount) => ({ type: SET_TOTAL_FRIENDS_COUNT, totalFriendsCount });
const setMembersTypeAC = (membersType) => ({ type: SET_MEMBERS_TYPE, membersType });
const setSearchTermAC = (searchTerm) => ({ type: SET_SEARCH_TERM, searchTerm });
const toggleFollowingAC = (id, followed) => ({ type: TOGGLE_FOLLOWING, id, followed });
const toggleFollowingProgressAC = (followingInProgress, id) => ({ type: TOGGLE_FOLLOWING_PROGRESS, followingInProgress, id });
const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export function* handleGetMembers({ count, page, term, friend }) {
   yield put(toggleIsFetchingAC(true));
   const response = yield call(membersAPI.getMembersRequest, count, page, term, friend);
   yield put(setMembersAC(response.items));
   yield put(setCurrentPageAC(page));
   yield put(setTotalItemsCountAC(response.totalCount));
   yield put(setMembersTypeAC(friend));
   yield put(setSearchTermAC(term));
   yield put(toggleIsFetchingAC(false));
}

export function* handleGetFriends({ count, page }) {
   const response = yield call(membersAPI.getMembersRequest, count, page, '', true);
   yield put(setFriendsAC(response.items));
   yield put(setTotalFriendsCountAC(response.totalCount));
}

export function* handleGetNewcomers({ count }) {
   const response = yield call(membersAPI.getMembersRequest, count, 1, '', null);
   yield put(setNewcomersAC(response.items));
   yield put(setTotalMembersCountAC(response.totalCount));
}

export function* handleFollow({ userId }) {
   yield put(toggleFollowingProgressAC(true, userId));
   const response = yield call(followAPI.followRequest, userId);
   if (response.resultCode === 0) {
      yield put(toggleFollowingAC(userId, true));
      yield put(getFriendsAC(5, 1));
      yield put(getFollowedAC(userId)); //change it
   }
   yield put(toggleFollowingProgressAC(false, userId));
}

export function* handleUnfollow({ userId }) {
   yield put(toggleFollowingProgressAC(true, userId));
   const response = yield call(followAPI.unfollowRequest, userId);
   if (response.resultCode === 0) {
      yield put(toggleFollowingAC(userId, false));
      yield put(getFriendsAC(5, 1));
      yield put(getFollowedAC(userId)); //change it
   }
   yield put(toggleFollowingProgressAC(false, userId));
}


export default membersReducer;