import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import moment from 'moment';
import {
   getDialogsSelector,
   getMessagesSelector,
   getPageMessagesCountSelector,
   getIsFetchingSelector
} from '../../../../redux/selectors/messages-selector.js';
import {
   getIdSelector,
} from '../../../../redux/selectors/auth-selector.js';
import {
   getMessagesAC as getMessages,
   sendNewMessageAC as sendNewMessage,
   getNewMessagesCountAC as getNewMessagesCount
} from '../../../../redux/reducers/messages-reducer.js';
import avatarCreater from '../../../../utils/avatarCreater.js';
import cn from 'classnames';
import s from './Messages.module.css';

import Preloader from '../../../common/Preloader/Preloader';
import MessageItem from './MessageItem/MessageItem';
import NewMessageForm from './NewMessageForm/NewMessageForm';

const Messages = (props) => {
   const dispatch = useDispatch();
   const ownerId = useSelector(state => getIdSelector(state));
   const dialogs = useSelector(state => getDialogsSelector(state));
   const messages = useSelector(state => getMessagesSelector(state));
   const pageMessagesCount = useSelector(state => getPageMessagesCountSelector(state));
   const isFetching = useSelector(state => getIsFetchingSelector(state));

   const { userId } = useParams();
   const interlocutor = dialogs.filter(dialog => dialog.id === +userId)[0];
   const messagesWindow = React.createRef();

   useEffect(() => {
      messagesWindow.current.scrollTo({top: 200});

      dispatch(getMessages(userId, pageMessagesCount, 1)); //userId, count, page
      dispatch(getNewMessagesCount()); 
   }, [userId]);

   const handleSendNewMessage = (text) => {
      dispatch(sendNewMessage(userId, text)); //userId, text
   }

   const messageItems = messages.map(message => {
      return <MessageItem key={message.id}
         id={message.id}
         senderName={message.senderName}
         body={message.body}
         date={message.addedAt}
         viewed={message.viewed}
         ownerMessage={message.senderId === ownerId} />
   });

   if (isFetching) return <Preloader />

   return (
      <div className={cn(s.block, 'main-page')}>
         <div className={cn(s.chatHeader)}>
            <div className={s.backButton}>
               <NavLink to={'/messages'}>back</NavLink>
            </div>
            <div className={s.info}>
               <NavLink to={`/profile/${interlocutor.id}`}>{interlocutor.userName}</NavLink>
               <span>{moment(interlocutor.lastUserActivityDate).format('lll')}</span>
            </div>
            <div className={s.avatar}>
               <img src={interlocutor.photos.small || avatarCreater()} alt="" />
            </div>
         </div>
         <div className={s.messageItems} ref={messagesWindow}>
            {messageItems}
         </div>
         <div className={s.newMessageForm}>
            <NewMessageForm
               sendNewMessage={handleSendNewMessage} />
         </div>
      </div>
   );
}


export default compose(
   withAuthRedirect,
)(Messages);