import React from 'react';
import cn from 'classnames';
import s from './Settings.module.css';

import EditLine from './EditLine/EditLine';
import EditAvatarForm from './EditForms/EditAvatarForm';

const Settings = (props) => {
   return (
      <div className={cn(s.block, 'widget')}>
         <h1 className={cn(s.title, 'widget__title')}>Settings</h1>
         <div className={s.panel}>
            <EditLine title={'Avatar'}>
               <EditAvatarForm />
            </EditLine>
            <EditLine title={'Status'}>
               <EditAvatarForm />
            </EditLine>
            <EditLine title={'Data'}>
               <EditAvatarForm />
            </EditLine>
         </div>
      </div>
   );
}


export default Settings;