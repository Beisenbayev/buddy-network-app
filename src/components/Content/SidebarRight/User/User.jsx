import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
   getIdSelector,
   getLoginSelector,
   getAvatarSelector,
   getIsAuthSelector,
} from '../../../../redux/selectors/auth-selector.js';
import createAvatar from '../../../../utils/avatarCreater.js';
import cn from 'classnames';
import s from './User.module.css';

const User = (props) => {
   const dispatch = useDispatch();
   const id = useSelector(state => getIdSelector(state));
   const login = useSelector(state => getLoginSelector(state));
   const avatar = useSelector(state => getAvatarSelector(state));
   const isAuth = useSelector(state => getIsAuthSelector(state));

   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Identity</h3>
         {isAuth ?
            <div className={s.about}>
               <div className={s.avatar}>
                  <img src={avatar || createAvatar()} alt="" />
               </div>
               <div className={s.info}>
                  <h3>{login}</h3>
                  <span>ID: {id}</span>
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