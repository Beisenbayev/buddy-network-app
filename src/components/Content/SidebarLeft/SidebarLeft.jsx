import React from 'react';
import s from './SidebarLeft.module.css';

import NavigationContainer from './Navigation/NavigationContainer';
import NewcomersContainer from './Newcomers/NewcomersContainer';

const SidebarLeft = (props) => {
   return (
      <div className={s.block}>
         <NavigationContainer />
         <NewcomersContainer />
      </div>
   );
}


export default SidebarLeft;