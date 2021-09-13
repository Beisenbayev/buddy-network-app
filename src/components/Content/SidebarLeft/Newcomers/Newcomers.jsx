import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   getNewcomersSelector,
} from '../../../../redux/selectors/members-selector.js';
import cn from 'classnames';
import s from './Newcomers.module.css';

import WidgetMemberItem from '../../../common/WidgetMemberItem/WidgetMemberItem';

const Newcomers = (props) => {
   const dispatch = useDispatch();
   const newcomers = useSelector(state => getNewcomersSelector(state));

   const newcomerItems = newcomers.map(newcomer => {
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