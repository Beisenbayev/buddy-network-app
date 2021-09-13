import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   getMembersSelector,
   getCurrentPageSelector,
   getPageItemsCountSelector,
   getTotalItemsCountSelector,
   getTotalMembersCountSelector,
   getTotalFriendsCountSelector,
   getMembersTypeSelector,
   getSearchTermSelector,
   getFollowingInProgressSelector,
   getIsFetchingSelector,
} from '../../../../redux/selectors/members-selector.js';
import {
   getIsAuthSelector,
} from '../../../../redux/selectors/auth-selector.js'
import {
   setMembersThunkCreater as setMembers,
   followThunkCreater as follow,
   unfollowThunkCreater as unfollow
} from '../../../../redux/reducers/members-reducer.js';
import cn from 'classnames';
import s from './Members.module.css';

import Preloader from '../../../common/Preloader/Preloader';
import MembersSearchForm from './MembersSearchForm/MembersSearchForm';
import Pagination from '../../../common/Pagination/Pagination';
import MemberItem from './MemberItem/MemberItem';

const Members = (props) => {
   const dispatch = useDispatch();
   const members = useSelector(state => getMembersSelector(state));
   const currentPage = useSelector(state => getCurrentPageSelector(state));
   const pageItemsCount = useSelector(state => getPageItemsCountSelector(state));
   const totalItemsCount = useSelector(state => getTotalItemsCountSelector(state));
   const totalMembersCount = useSelector(state => getTotalMembersCountSelector(state));
   const totalFriendsCount = useSelector(state => getTotalFriendsCountSelector(state));
   const membersType = useSelector(state => getMembersTypeSelector(state));
   const searchTerm = useSelector(state => getSearchTermSelector(state));
   const followingInProgress = useSelector(state => getFollowingInProgressSelector(state));
   const isFetching = useSelector(state => getIsFetchingSelector(state));
   const isAuth = useSelector(state => getIsAuthSelector(state));

   useEffect(() => {
      dispatch(setMembers(pageItemsCount, currentPage, '', membersType)); //count, page, term, friend
   }, []);

   const handleMembersTypeChange = (type) => {
      dispatch(setMembers(pageItemsCount, 1, '', type));
   }

   const handleMembersSearch = (term) => {
      dispatch(setMembers(pageItemsCount, 1, term, null));
   }

   const handlePageChange = (page) => {
      dispatch(setMembers(pageItemsCount, page, searchTerm, membersType));
   }

   const handleFollow = (id) => {
      dispatch(follow(id));
   }

   const handleUnfollow = (id) => {
      dispatch(unfollow(id));
   }

   const memberItems = members.map(member => {
      return <MemberItem key={member.id}
         id={member.id}
         name={member.name}
         avatar={member.photos.small}
         followed={member.followed}
         followingInProgress={followingInProgress}
         follow={handleFollow}
         unfollow={handleUnfollow}
         isAuth={isAuth}
      />
   });

   if (isFetching) return <Preloader />

   return (
      <div className={cn(s.block, 'main-page')}>
         <h1 className={cn(s.title, 'main-page__title')}>Members</h1>
         <div className={s.searchPanel}>
            <MembersSearchForm membersSearch={handleMembersSearch} />
         </div>
         <div className={s.listTabs}>
            <ul>
               <li className={s.listTabItem} onClick={() => handleMembersTypeChange(null)}>
                  <span>All Members</span><b>{totalMembersCount}</b>
               </li>
               {isAuth &&
                  <li className={s.listTabItem} onClick={() => handleMembersTypeChange(true)}>
                     <span>Friends</span><b>{totalFriendsCount}</b>
                  </li>
               }
            </ul>
         </div>
         <div className={s.pagination}>
            <Pagination listName={'members'}
               currentPage={currentPage}
               totalItemsCout={totalItemsCount}
               pageItemsCount={pageItemsCount}
               pagePortionsCount={10}
               pageChange={handlePageChange}
            />
         </div>
         <ul className={s.memberItems}>
            {memberItems}
         </ul>
      </div>
   );
}


export default Members;