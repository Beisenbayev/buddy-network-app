import React from 'react';
import cn from 'classnames';
import s from './Members.module.css';

import Pagination from '../../../common/Pagination/Pagination';
import MemberItem from './MemberItem/MemberItem';

const Members = (props) => {
   const memberItems = props.members.map(member => {
      return <MemberItem key={member.id}
         id={member.id}
         name={member.name}
         avatar={member.photos.small}
         followed={member.followed}
         followingInProgress={props.followingInProgress}
         follow={props.follow}
         unfollow={props.unfollow}
         isAuth={props.isAuth}
      />
   })

   return (
      <div className={cn(s.block, 'main-page')}>
         <h1 className={cn(s.title, 'main-page__title')}>Members</h1>
         <div className={s.listTabs}>
            <ul>
               <li className={s.listTabItem} onClick={() => props.membersTypeChange(null)}>
                  <span>All Members</span><b>{props.totalMembersCount}</b>
               </li>
               {props.isAuth &&
                  <li className={s.listTabItem} onClick={() => props.membersTypeChange(true)}>
                     <span>Friends</span><b>{props.totalFriendsCount}</b>
                  </li>
               }
            </ul>
         </div>
         <div className={s.pagination}>
            <Pagination listName={'members'}
               currentPage={props.currentPage}
               totalItemsCout={props.totalItemsCount}
               pageItemsCount={props.pageItemsCount}
               pagePortionsCount={10}
               pageChange={props.pageChange}
            />
         </div>
         <ul className={s.memberItems}>
            {memberItems}
         </ul>
      </div>
   );
}


export default Members;