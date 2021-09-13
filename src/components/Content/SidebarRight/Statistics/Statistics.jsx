import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserFriends, FaUsers } from 'react-icons/fa';
import {
   getTotalMembersCountSelector,
   getTotalFriendsCountSelector,
} from '../../../../redux/selectors/members-selector.js';
import {
   getIsAuthSelector,
} from '../../../../redux/selectors/auth-selector.js';
import cn from 'classnames';
import s from './Statistics.module.css';

const Statistics = (props) => {
   const dispatch = useDispatch();
   const totalMembersCount = useSelector(state => getTotalMembersCountSelector(state));
   const totalFriendsCount = useSelector(state => getTotalFriendsCountSelector(state));
   const isAuth = useSelector(state => getIsAuthSelector(state));

   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Statistics</h3>
         <ul className={s.list}>
            <li className={s.listItem}>
               <p><FaUsers /><span>Members</span></p><b>{totalMembersCount}</b>
            </li>
            {isAuth &&
               <li className={s.listItem}>
                  <p><FaUserFriends /><span>Friends</span></p><b>{totalFriendsCount}</b>
               </li>
            }
         </ul>
      </div>
   );
}


export default Statistics;