import { membersAPI } from '../../api/api.js';
import { setFollowedThunkCreater } from './profile-reducer';

const membersID = 'buddy/members';
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

export const setMembersThunkCreater = (count, page, term, friend) => {
   return async (dispatch) => {
      dispatch(toggleIsFetchingAC(true));
      const response = await membersAPI.getMembersRequest(count, page, term, friend);
      dispatch(setMembersAC(response.items));
      dispatch(setCurrentPageAC(page));
      dispatch(setTotalItemsCountAC(response.totalCount));
      dispatch(setMembersTypeAC(friend));
      dispatch(setSearchTermAC(term));
      dispatch(toggleIsFetchingAC(false));
   }
}

export const setFriendsThunkCreater = (count, page) => {
   return async (dispatch) => {
      const response = await membersAPI.getMembersRequest(count, page, '', true);
      dispatch(setFriendsAC(response.items));
      dispatch(setTotalFriendsCountAC(response.totalCount));
   }
}

export const setNewcomersThunkCreater = (count) => {
   return async (dispatch) => {
      const response = await membersAPI.getMembersRequest(count, 1, '', null);
      dispatch(setNewcomersAC(response.items));
      dispatch(setTotalMembersCountAC(response.totalCount));
   }
}

export const followThunkCreater = (id) => {
   return async (dispatch) => {
      dispatch(toggleFollowingProgressAC(true, id));
      const response = await membersAPI.followRequest(id);
      if (response.resultCode === 0) {
         dispatch(toggleFollowingAC(id, true));
         dispatch(setFriendsThunkCreater(5, 1));
         dispatch(setFollowedThunkCreater(id));
      }
      dispatch(toggleFollowingProgressAC(false, id));
   }
}

export const unfollowThunkCreater = (id) => {
   return async (dispatch) => {
      dispatch(toggleFollowingProgressAC(true, id));
      const response = await membersAPI.unfollowRequest(id);
      if (response.resultCode === 0) {
         dispatch(toggleFollowingAC(id, false));
         dispatch(setFriendsThunkCreater(5, 1));
         dispatch(setFollowedThunkCreater(id));
      }
      dispatch(toggleFollowingProgressAC(false, id));
   }
}


export default membersReducer;