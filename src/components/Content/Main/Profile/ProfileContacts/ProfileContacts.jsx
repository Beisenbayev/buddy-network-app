import React from 'react';
import cn from 'classnames';
import {
   FaGithub, FaVk, FaFacebookF, FaInstagram,
   FaTwitter, FaGlobe, FaYoutube, FaLink
} from 'react-icons/fa';
import s from './ProfileContacts.module.css';

const ProfileContacts = (props) => {
   const contactIcons = {
      github: <FaGithub />,
      vk: <FaVk />,
      facebook: <FaFacebookF />,
      instagram: <FaInstagram />,
      twitter: <FaTwitter />,
      website: <FaGlobe />,
      youtube: <FaYoutube />,
      mainLink: <FaLink />,
   }

   const contacts = Object.keys(props.contacts).map(contact => {
      return <li key={contact} className={s.link}>
         <i>{contactIcons[contact]}</i>
         <span>{`${contact}: `}</span>
         <a target='_blank'
            rel="noreferrer"
            href={props.contacts[contact]}>{props.contacts[contact] || '-'}</a>
      </li>
   });

   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Contacts</h3>
         <ul className={s.newtworkLinks}>
            {contacts}
         </ul>
      </div>
   );
}


export default ProfileContacts;