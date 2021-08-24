import React from 'react';
import s from './Content.module.css';

import Main from './Main/Main';
import SidebarLeft from './SidebarLeft/SidebarLeft';
import SidebarRight from './SidebarRight/SidebarRight';

const Content = (props) => {
   return (
      <div className={s.block}>
         <SidebarLeft />
         <Main />
         <SidebarRight />
      </div>
   );
}


export default Content;