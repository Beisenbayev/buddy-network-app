import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './NotFound.module.css';

import Button from '../../../common/Button/Button';

const NotFound = (props) => {
   return (
      <div className={cn(s.block, 'main-page')}>
         <h2>404</h2>
         <h3>Page Not Found</h3>
         <p>...maybe the page you're looking for is not found or never existed.</p>
         <NavLink to={'/'}>
            <Button text={'back to home'} />
         </NavLink>
      </div>
   );
}


export default NotFound;