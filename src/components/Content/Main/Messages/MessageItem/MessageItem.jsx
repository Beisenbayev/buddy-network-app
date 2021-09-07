import React from 'react';
import cn from 'classnames';
import moment from 'moment';
import { FaCheck, FaCheckDouble } from 'react-icons/fa'
import s from './MessageItem.module.css';

const MessageItem = (props) => {
   return (
      <div className={cn(s.block, {
         [s.ownerMessage]: props.ownerMessage
      })}>
         <div className={s.body}>
            <p>{props.body}</p>
            <div className={s.footer}>
               <span className={s.date}>{moment(props.date).format('lll')}</span>
               {props.ownerMessage && <i>{props.viewed ? <FaCheckDouble /> : <FaCheck />}</i>}
            </div>
         </div>
      </div>
   );
}


export default MessageItem;