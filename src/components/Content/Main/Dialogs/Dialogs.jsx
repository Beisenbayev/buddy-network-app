import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
   const dialogItems = props.dialogs.map(dialog => {
      return <DialogItem key={dialog.id} id={dialog.id}
         userName={dialog.userName}
         avatar={dialog.photos.small}
         hasNewMessages={dialog.hasNewMessages}
         lastDialogActivityDate={dialog.lastDialogActivityDate}
         lastUserActivityDate={dialog.lastUserActivityDate}
         newMessagesCount={dialog.newMessagesCount}
      />
   })

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


export default Dialogs;