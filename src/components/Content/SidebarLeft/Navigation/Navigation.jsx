import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
   FaUserAlt, FaCommentAlt, FaUsers, FaCog
} from 'react-icons/fa';
import {
   getNewMessagesCountSelector,
} from '../../../../redux/selectors/messages-selector.js';
import {
   getIdSelector
} from '../../../../redux/selectors/auth-selector.js';
import cn from 'classnames';
import s from './Navigation.module.css';

const Navigation = (props) => {
   //const dispatch = useDispatch();
   const id = useSelector(state => getIdSelector(state));
   const newMessagesCount = useSelector(state => getNewMessagesCountSelector(state));

   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>navigation</h3>
         <ul className={s.list}>
            <li className={s.link}>
               <NavLink to={`/profile/${id}`}
                  activeClassName={s.activeLink}><FaUserAlt /> <span>profile</span>
               </NavLink>
            </li>
            <li className={s.link}>
               <NavLink to='/messages'
                  activeClassName={s.activeLink}><FaCommentAlt /> <span>messages</span>
                  {newMessagesCount > 0 &&
                     <b className={s.notificationCount}>{newMessagesCount}</b>
                  }
               </NavLink>
            </li>
            <li className={s.link}>
               <NavLink to='/members'
                  activeClassName={s.activeLink}><FaUsers /> <span>members</span>
               </NavLink>
            </li>
            <li className={s.link}>
               <NavLink to='/settings'
                  activeClassName={s.activeLink}><FaCog /> <span>settings</span>
               </NavLink>
            </li>
         </ul>
      </div>
   );
}


export default Navigation;