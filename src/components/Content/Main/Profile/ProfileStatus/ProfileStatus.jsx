import React from 'react';
import cn from 'classnames';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Status</h3>
         <p>{props.status || <span className={s.noneStatus}>none status</span>}</p>
      </div>
   );
}


export default ProfileStatus;