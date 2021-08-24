import React from 'react';
import { NavLink } from 'react-router-dom';
import avatarCreater from '../../../utils/avatarCreater.js';
import s from './WidgetMemberItem.module.css';

const BasicMemberItem = (props) => {
   return (
      <li className={s.block}>
         <div className={s.avatar}>
            <img src={props.avatar || avatarCreater()} alt="" />
         </div>
         <div className={s.info}>
            <h4>{props.name}</h4>
            <NavLink to={`/profile/${props.id}`}>visit profile</NavLink>
         </div>
      </li>
   );
}


export default BasicMemberItem;