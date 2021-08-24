import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';

import WidgetMemberItem from '../../../common/WidgetMemberItem/WidgetMemberItem';

const Friends = (props) => {
   const friendItems = props.friends.map(friend => {
      return <WidgetMemberItem key={friend.id}
         id={friend.id}
         name={friend.name}
         avatar={friend.photos.small}
         followed={friend.followed} />
   });

   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Friends</h3>
         {props.isAuth ?
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