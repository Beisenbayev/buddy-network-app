import React from 'react';
import cn from 'classnames';
import s from './Newcomers.module.css';

import WidgetMemberItem from '../../../common/WidgetMemberItem/WidgetMemberItem';

const Newcomers = (props) => {
   const newcomerItems = props.newcomers.map(newcomer => {
      return <WidgetMemberItem key={newcomer.id}
         id={newcomer.id}
         name={newcomer.name}
         avatar={newcomer.photos.small}
         followed={newcomer.followed} />
   })

   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Newcomers</h3>
         <ul className={s.list}>
            {newcomerItems}
         </ul>
      </div>
   );
}


export default Newcomers;