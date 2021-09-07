import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import avatarCreater from '../../../../../utils/avatarCreater.js';
import s from './ProfileInfo.module.css';

import Button from '../../../../common/Button/Button';

const ProfileInfo = (props) => {
   return (
      <div className={s.block}>
         <div className={s.leftSide}>
            <div className={s.avatar}>
               <img src={props.profile.photos.large || avatarCreater()} alt="" />
            </div>
            <div className={s.buttons}>
               {!props.isOwner &&
                  (props.followed ?
                     <Button text={'unfollow'}
                        disabled={props.followingInProgress.some(id => id === props.profile.userId)}
                        onClick={() => props.unfollow(props.profile.userId)} /> :
                     <Button text={'follow'}
                        disabled={props.followingInProgress.some(id => id === props.profile.userId)}
                        onClick={() => props.follow(props.profile.userId)} />
                  )
               }
               {/*link more quickly than setDialogsThunkCraeter */}
               {!props.isOwner &&
                  <NavLink to={`/messages/${props.profile.userId}`} >
                     <Button text={'message'}
                        className={s.messageButton}
                        onClick={() => props.startNewChat(props.profile.userId)} />
                  </NavLink>
               }
            </div>
         </div>
         <div className={cn(s.rightSide)}>
            <h3 className={s.userName}>{props.profile.fullName}</h3>
            <p className={s.aboutMe}>
               <b>about me: </b>{props.profile.aboutMe || <span>-</span>}
            </p>
            <div className={s.jobStatus}>
               <b>job status: </b>
               {props.profile.lookingForAJob ?
                  <p>
                     <i className={s.lookingForAJob}></i>
                     <span>{props.profile.lookingForAJobDescription || '-'}</span>
                  </p> :
                  <p>
                     <i className={s.notLookingForAJob}></i><span>-</span>
                  </p>
               }
            </div>
         </div>
      </div>
   );
}


export default ProfileInfo;