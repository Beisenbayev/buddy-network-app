import React from 'react';
import cn from 'classnames';
import s from './Settings.module.css';

import EditLine from './EditLine/EditLine';
import EditAvatarForm from './EditForms/EditAvatarForm';
import EditStatusForm from './EditForms/EditStatusForm';
import EditDataForm from './EditForms/EditDataForm';

const Settings = (props) => {
   return (
      <div className={cn(s.block, 'main-page')}>
         <h1 className={cn(s.title, 'main-page__title')}>Settings</h1>
         <div className={s.panel}>
            <EditLine title={'Avatar'}>
               <EditAvatarForm profile={props.profile}
                  updateAvatar={props.updateAvatar} />
            </EditLine>
            <EditLine title={'Status'}>
               <EditStatusForm status={props.status}
                  updateStatus={props.updateStatus} />
            </EditLine>
            <EditLine title={'Data'}>
               <EditDataForm profile={props.profile}
                  updateProfile={props.updateProfile} />
            </EditLine>
         </div>
      </div>
   );
}


export default Settings;