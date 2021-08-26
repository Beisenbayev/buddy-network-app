import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import {
   FaUserAlt, FaCommentAlt,
   FaUsers, FaCog
} from 'react-icons/fa';
import s from './Navigation.module.css';

const Navigation = (props) => {
   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>navigation</h3>
         <ul className={s.list}>
            <li className={s.link}>
               <NavLink to='/profile'
                  activeClassName={s.activeLink}><FaUserAlt /> <span>profile</span>
               </NavLink>
            </li>
            <li className={s.link}>
               <NavLink to='/messages'
                  activeClassName={s.activeLink}><FaCommentAlt /> <span>messages</span>
                  <b className={s.notificationCount}>{props.newMessagesCount}</b>
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