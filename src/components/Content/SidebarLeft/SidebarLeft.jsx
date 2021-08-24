import React from 'react';
import s from './SidebarLeft.module.css';

import Navigation from './Navigation/Navigation';
import NewcomersContainer from './Newcomers/NewcomersContainer';

const SidebarLeft = (props) => {
   return (
      <div className={s.block}>
         <Navigation />
         <NewcomersContainer />
      </div>
   );
}


export default SidebarLeft;