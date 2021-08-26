import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import avatarCreater from '../../../../../utils/avatarCreater.js';
import dateConverter from '../../../../../utils/dateConverter.js';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
   return (
      <NavLink to={`messages/${props.id}`}
         className={cn(s.block,
            { [s.isHighlighted]: props.hasNewMessages })}>
         <div className={s.avatar}>
            <img src={props.avatar || avatarCreater()} alt="" />
         </div>
         <div className={s.info}>
            <h3>{props.userName}</h3>
            <span className={s.lastDialogDate}>
               {dateConverter(props.lastDialogActivityDate)}
            </span>
            <span className={s.newMessagesCount}>
               {props.newMessagesCount}
            </span>
         </div>
      </NavLink>
   );
}


export default DialogItem;