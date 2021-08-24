import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import cn from 'classnames';
import s from './Header.module.css';

import Logotype from './Logotype/Logotype';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import Button from '../common/Button/Button';

const Header = (props) => {
   let [mobileNavIsShown, setMobileNavIsShown] = useState(false);

   const toggleShowingMobileNav = () => {
      mobileNavIsShown ? setMobileNavIsShown(false) :
         setMobileNavIsShown(true);
   }

   return (
      <><header className={s.block}>
         <div className={s.top}>
            <Logotype />
            <div className={s.buttons}>
               {props.isAuth ?
                  <Button className={s.logout} text={'logout'}
                     onClick={() => props.logout()} /> :
                  <NavLink to={'/login'}>
                     <Button className={s.login} text={'login'} />
                  </NavLink>
               }
               <Button className={s.mobileNavButton} text={<FaBars />}
                  onClick={toggleShowingMobileNav} />
            </div>
         </div>
         <div className={cn(s.mobileNav, {
            [s.isShown]: mobileNavIsShown
         })}>
            <MobileNavigation isAuth={props.isAuth}
               logout={props.logout} />
         </div>
      </header>
      <div className={s.fixedPadding}></div></>
   );
}


export default Header;