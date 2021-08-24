import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import createAvatar from '../../../../utils/avatarCreater.js';
import s from './User.module.css';

const User = (props) => {
   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Identity</h3>
         {props.isAuth ?
            <div className={s.about}>
               <div className={s.avatar}>
                  <img src={props.avatar || createAvatar()} alt="" />
               </div>
               <div className={s.info}>
                  <h3>{props.login}</h3>
                  <span>ID: {props.id}</span>
                  <NavLink to='/settings'>edit profile</NavLink>
               </div>
            </div> :
            <p className={s.authAdvice}>
               Please <NavLink to='/login'>login</NavLink> to see your <b>identity</b>
            </p>
         }
      </div>
   );
}


export default User;