import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import {
   getProfileSelector,
   getStatusSelector,
   getFollowedSelector,
   getIsFetchingSelector,
} from '../../../../redux/selectors/profile-selector.js';
import {
   getFollowingInProgressSelector,
} from '../../../../redux/selectors/members-selector.js';
import {
   getIdSelector,
} from '../../../../redux/selectors/auth-selector.js';

import {
   setProfileThunkCreater as setProfile
} from '../../../../redux/reducers/profile-reducer.js';
import {
   followThunkCreater as follow,
   unfollowThunkCreater as unfollow
} from '../../../../redux/reducers/members-reducer.js';
import {
   startNewChatAC as startNewChat
} from '../../../../redux/reducers/messages-reducer.js';
import s from './Profile.module.css';

import Preloader from '../../../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileContacts from './ProfileContacts/ProfileContacts';

const Profile = (props) => {
   const dispatch = useDispatch();
   const authId = useSelector(state => getIdSelector(state));
   const profile = useSelector(state => getProfileSelector(state));
   const status = useSelector(state => getStatusSelector(state));
   const followed = useSelector(state => getFollowedSelector(state));
   const followingInProgress = useSelector(state => getFollowingInProgressSelector(state));
   const isFetching = useSelector(state => getIsFetchingSelector(state));

   const { userId } = useParams(); //typeof === string

   useEffect(() => {
      dispatch(setProfile(userId));
   }, [userId]);

   const handleFollow = (userId) => {
      dispatch(follow(userId));
   }

   const handleUnfollow = (userId) => {
      dispatch(unfollow(userId));
   }

   const handleStartNewChat = (userId) => {
      dispatch(startNewChat(userId)); //fix it, show chat page with current id after clicking
   }

   if (isFetching) return <Preloader />

   return (
      <div className={s.block}>
         <ProfileInfo profile={profile}
            isOwner={+userId === authId}
            followed={followed}
            followingInProgress={followingInProgress}
            follow={handleFollow}
            unfollow={handleUnfollow}
            startNewChat={handleStartNewChat} />
         <ProfileStatus status={status} />
         <ProfileContacts contacts={profile.contacts} />
      </div>
   );
}


export default compose(
   withAuthRedirect
)(Profile);