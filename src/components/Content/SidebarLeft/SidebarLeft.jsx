import React from 'react';
import s from './SidebarLeft.module.css';

import Navigation from './Navigation/Navigation';
import Newcomers from './Newcomers/Newcomers';

const SidebarLeft = (props) => {
   return (
      <div className={s.block}>
         <Navigation />
         <Newcomers />
      </div>
   );
}


export default SidebarLeft;