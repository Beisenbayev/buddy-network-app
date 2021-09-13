import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './MobileNavigation.module.css';

const MobileNavigation = (props) => {
   return (
      <ul className={s.block}>
         <li className={s.link}>
            <NavLink to={`/profile/${props.id}`} activeClassName={s.activeLink}>profile</NavLink>
         </li>
         <li className={s.link}>
            <NavLink to='/members' activeClassName={s.activeLink}>members</NavLink>
         </li>
         <li className={s.link}>
            <NavLink to='/messages' activeClassName={s.activeLink}>messages</NavLink>
         </li>
         <li className={s.link}>
            <NavLink to='/settings' activeClassName={s.activeLink}>settings</NavLink>
         </li>
         {props.isAuth ?
            <li className={cn(s.link, s.logout)}>
               <NavLink to='/' onClick={() => props.logout()}>logout</NavLink>
            </li> :
            <li className={cn(s.link, s.login)}>
               <NavLink to='/login'>login</NavLink>
            </li>
         }
      </ul>
   );
}


export default MobileNavigation;