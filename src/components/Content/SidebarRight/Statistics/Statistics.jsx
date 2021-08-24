import React from 'react';
import cn from 'classnames';
import { FaUserFriends, FaUsers } from 'react-icons/fa';
import s from './Statistics.module.css';

const Statistics = (props) => {
   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Statistics</h3>
         <ul className={s.list}>
            <li className={s.listItem}>
               <p><FaUsers /><span>Members</span></p><b>{props.totalMembersCount}</b>
            </li>
            {props.isAuth &&
               <li className={s.listItem}>
                  <p><FaUserFriends /><span>Friends</span></p><b>{props.totalFriendsCount}</b>
               </li>
            }
         </ul>
      </div>
   );
}


export default Statistics;