import React from 'react';
import cn from 'classnames';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import avatarCreater from '../../../../../utils/avatarCreater.js';
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
               {moment(props.lastDialogActivityDate).format('ll')}
            </span>
            {props.newMessagesCount > 0 &&
               <span className={s.newMessagesCount}>
                  {props.newMessagesCount}
               </span>
            }
         </div>
      </NavLink>
   );
}


export default DialogItem;