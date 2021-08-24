import React from 'react';
import { NavLink } from 'react-router-dom';
import avatarCreater from '../../../../../utils/avatarCreater.js';
import s from './MemberItem.module.css';

import Button from '../../../../common/Button/Button.jsx';

const MemberItem = (props) => {
   return (
      <li className={s.block}>
         <div className={s.avatar}>
            <img src={props.avatar || avatarCreater()} alt="" />
         </div>
         <div className={s.info}>
            <NavLink to={`profile/${props.id}`} className={s.userName}>{props.name}</NavLink>
            <div className={s.buttons}>
               {props.followed ?
                  <Button text={'unfollow'}
                     disabled={props.followingInProgress.some(id => id === props.id)}
                     onClick={() => props.unfollow(props.id)} /> :
                  <Button text={'follow'}
                     disabled={props.followingInProgress.some(id => id === props.id)}
                     onClick={() => props.follow(props.id)} />
               }
            </div>
         </div>
      </li>
   );
}


export default MemberItem;