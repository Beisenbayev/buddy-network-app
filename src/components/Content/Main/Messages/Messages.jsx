import React from 'react';
import cn from 'classnames';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import avatarCreater from '../../../../utils/avatarCreater.js';
import s from './Messages.module.css';

import MessageItem from './MessageItem/MessageItem';
import NewMessageForm from './NewMessageForm/NewMessageForm';

const Messages = (props) => {
   const messageItems = props.messages.map(message => {
      return <MessageItem key={message.id}
         id={message.id}
         senderName={message.senderName}
         body={message.body}
         date={message.addedAt}
         viewed={message.viewed}
         ownerMessage={message.senderId === props.ownerId} />
   })

   return (
      <div className={cn(s.block, 'main-page')}>
         <div className={cn(s.chatHeader)}>
            <div className={s.backButton}>
               <NavLink to={'/messages'}>back</NavLink>
            </div>
            <div className={s.info}>
               <NavLink to={`/profile/${props.interlocutor.id}`}>{props.interlocutor.userName}</NavLink>
               <span>{moment(props.interlocutor.lastUserActivityDate).format('lll')}</span>
            </div>
            <div className={s.avatar}>
               <img src={props.interlocutor.photos.small || avatarCreater()} alt="" />
            </div>
         </div>
         <div className={s.messageItems}>
            {messageItems}
         </div>
         <div className={s.newMessageForm}>
            <NewMessageForm 
               sendNewMessage={props.sendNewMessage} />
         </div>
      </div>
   );
}


export default Messages;