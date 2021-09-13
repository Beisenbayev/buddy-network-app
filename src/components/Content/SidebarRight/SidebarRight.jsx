import React from 'react';
import s from './SidebarRight.module.css';

import User from './User/User';
import Friends from './Friends/Friends';
import Statistics from './Statistics/Statistics';

const SidebarRight = (props) => {
   return (
      <div className={s.block}>
         <User />
         <Friends />
         <Statistics />
      </div>
   );
}


export default SidebarRight;