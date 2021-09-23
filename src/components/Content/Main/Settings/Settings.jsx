import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import withAuthRedirect from '../../../../hoc/withAuthRedirect.js';
import {
   getProfileSelector,
   getStatusSelector,
   getIsFetchingSelector,
} from '../../../../redux/selectors/profile-selector.js';
import {
   getIdSelector,
} from '../../../../redux/selectors/auth-selector.js';

import {
   getProfileAC as getProfile,
   updateProfileAC as updateProfile,
   updateStatusAC as updateStatus,
   updateAvatarAC as updateAvatar,
} from '../../../../redux/reducers/profile-reducer.js';
import cn from 'classnames';
import s from './Settings.module.css';

import Preloader from '../../../common/Preloader/Preloader';
import EditLine from './EditLine/EditLine';
import EditAvatarForm from './EditForms/EditAvatarForm';
import EditStatusForm from './EditForms/EditStatusForm';
import EditDataForm from './EditForms/EditDataForm';

const Settings = (props) => {
   const dispatch = useDispatch();
   const id = useSelector(state => getIdSelector(state));
   const profile = useSelector(state => getProfileSelector(state));
   const status = useSelector(state => getStatusSelector(state));
   const isFetching = useSelector(state => getIsFetchingSelector(state));

   useEffect(() => {
      dispatch(getProfile(id));
   }, []);

   const handleUpdateAvatar = (avatar) => {
      dispatch(updateAvatar(avatar));
   }

   const handleUpdateStatus = (status) => {
      dispatch(updateStatus(status));
   }

   const handleUpdateProfile = (data) => {
      dispatch(updateProfile(data));
   }

   if (isFetching) return <Preloader />

   return (
      <div className={cn(s.block, 'main-page')}>
         <h1 className={cn(s.title, 'main-page__title')}>Settings</h1>
         <div className={s.panel}>
            <EditLine title={'Avatar'}>
               <EditAvatarForm profile={profile}
                  updateAvatar={handleUpdateAvatar} />
            </EditLine>
            <EditLine title={'Status'}>
               <EditStatusForm status={status}
                  updateStatus={handleUpdateStatus} />
            </EditLine>
            <EditLine title={'Data'}>
               <EditDataForm profile={profile}
                  updateProfile={handleUpdateProfile} />
            </EditLine>
         </div>
      </div>
   );
}


export default compose(
   withAuthRedirect
)(Settings);