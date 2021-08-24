import React from 'react';
import s from './SidebarRight.module.css';

import UserContainer from './User/UserContainer';
import FriendsContainer from './Friends/FriendsContainer';
import StatisticsContainer from './Statistics/StatisticsContainer';

const SidebarRight = (props) => {
   return (
      <div className={s.block}>
         <UserContainer />
         <FriendsContainer />
         <StatisticsContainer />
      </div>
   );
}


export default SidebarRight;