import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {
   getIdSelector,
   getIsAuthSelector
} from '../../redux/selectors/auth-selector.js';
import {
   logoutThunkCreater as logout
} from '../../redux/reducers/auth-reducer.js';
import cn from 'classnames';
import s from './Header.module.css';

import Logotype from './Logotype/Logotype';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import Button from '../common/Button/Button';

const Header = (props) => {
   const dispatch = useDispatch();
   const id = useSelector(state => getIdSelector(state));
   const isAuth = useSelector(state => getIsAuthSelector(state));

   const [mobileNavIsShown, setMobileNavIsShown] = useState(false);

   const toggleShowingMobileNav = () => {
      mobileNavIsShown ? setMobileNavIsShown(false) :
         setMobileNavIsShown(true);
   }

   return (
      <>
         <header className={s.block}>
            <div className={s.top}>
               <Logotype />
               <div className={s.buttons}>
                  {isAuth ?
                     <Button className={s.logout} text={'logout'}
                        onClick={() => dispatch(logout())} /> :
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
               <MobileNavigation id={id}
                  isAuth={isAuth}
                  logout={() => dispatch(logout())} />
            </div>
         </header>
         <div className={s.fixedPadding}></div>
      </>
   );
}


export default Header;