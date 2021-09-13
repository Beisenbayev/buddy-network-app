import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { 
   getFriendsSelector, 
} from '../../../../redux/selectors/members-selector.js';
import {
   getIsAuthSelector
} from '../../../../redux/selectors/auth-selector.js';
import cn from 'classnames';
import s from './Friends.module.css';

import WidgetMemberItem from '../../../common/WidgetMemberItem/WidgetMemberItem';

const Friends = (props) => {
   const dispatch = useDispatch();
   const friends = useSelector(state => getFriendsSelector(state));
   const isAuth = useSelector(state => getIsAuthSelector(state));

   const friendItems = friends.map(friend => {
      return <WidgetMemberItem key={friend.id}
         id={friend.id}
         name={friend.name}
         avatar={friend.photos.small}
         followed={friend.followed} />
   });

   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Friends</h3>
         {isAuth ?
            <ul className={s.list}>
               {friendItems.length > 0 ? friendItems :
                  <p className={s.followAdvice}>You have not followed anyone yet.
                     Here you can find lots of friends:&nbsp;
                     <NavLink to='/members'>members</NavLink>
                  </p>
               }
            </ul> :
            <p className={s.authAdvice}>
               Please <NavLink to='/login'>login</NavLink> to see your <b>friends</b>
            </p>
         }
      </div>
   );
}


export default Friends;