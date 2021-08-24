import React from 'react';
import s from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileContacts from './ProfileContacts/ProfileContacts';

const Profile = (props) => {
   return (
      <div className={s.block}>
         <ProfileInfo profile={props.profile}
            isOwner={props.isOwner}
            followed={props.followed}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow} />
         <ProfileStatus status={props.status} />
         <ProfileContacts contacts={props.profile.contacts} />
      </div>
   );
}


export default Profile;