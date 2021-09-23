import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import {
   getDialogsSelector,
   getIsFetchingSelector,
} from '../../../../redux/selectors/messages-selector.js';
import {
   getDialogsAC as getDialogs
} from '../../../../redux/reducers/messages-reducer.js';
import cn from 'classnames';
import s from './Dialogs.module.css';

import Preloader from '../../../common/Preloader/Preloader';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
   const dispatch = useDispatch();
   const dialogs = useSelector(state => getDialogsSelector(state));
   const isFetching = useSelector(state => getIsFetchingSelector(state));

   useEffect(() => {
      dispatch(getDialogs());
   }, [])

   const dialogItems = dialogs.map(dialog => {
      return <DialogItem key={dialog.id} id={dialog.id}
         userName={dialog.userName}
         avatar={dialog.photos.small}
         hasNewMessages={dialog.hasNewMessages}
         lastDialogActivityDate={dialog.lastDialogActivityDate}
         lastUserActivityDate={dialog.lastUserActivityDate}
         newMessagesCount={dialog.newMessagesCount}
      />
   })

   if (isFetching) return <Preloader />

   return (
      <div className={cn(s.block, 'main-page')}>
         <h1 className={cn(s.title, 'main-page__title')}>Dialogs</h1>
         <div className={s.dialogItems}>
            {dialogItems.length > 0 ? dialogItems :
               <p className={s.startChatAdvice}>
                  You don't have any dialogs,
                  please go to <NavLink to='/members'>members</NavLink> to start a new <b>chat</b>
               </p>
            }
         </div>
      </div>
   );
}


export default compose(
   withAuthRedirect
)(Dialogs);