import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import {
   getIdSelector,
   getCaptchaUrlSelector,
   getIsSubmitingSelector,
   getIsAuthSelector,
} from '../../../../redux/selectors/auth-selector.js';

import {
   loginAC as login
} from '../../../../redux/reducers/auth-reducer.js';
import cn from 'classnames';
import s from './Login.module.css';

import LoginForm from './LoginForm/LoginForm';
import ResetPasswordForm from './ResetPasswordForm/ResetPasswordForm';

const Login = (props) => {
   const dispatch = useDispatch();
   const id = useSelector(state => getIdSelector(state));
   const captchaUrl = useSelector(state => getCaptchaUrlSelector(state));
   const isSubmiting = useSelector(state => getIsSubmitingSelector(state));
   const isAuth = useSelector(state => getIsAuthSelector(state));

   const [shownResetPassArea, setShownResetPassArea] = useState(false);

   const toggleShownResetPassArea = () => {
      shownResetPassArea ?
         setShownResetPassArea(false) :
         setShownResetPassArea(true);
   }

   const handleSendLoginData = (formData) => {
      const { email, password, rememberMe, captcha } = formData;
      dispatch(login(email, password, rememberMe, captcha));
   }
   
   if (isAuth) return <Redirect to={`/profile/${id}`} />

   return (
      <div className={cn(s.block, 'main-page')}>
         <h2 className={cn(s.title, 'main-page__title')}>Sign In</h2>
         <LoginForm captchaUrl={captchaUrl}
            toggleShownResetPassArea={toggleShownResetPassArea}
            isSubmiting={isSubmiting}
            sendLoginData={handleSendLoginData} />
         {shownResetPassArea &&
            <ResetPasswordForm
               toggleShownResetPassArea={toggleShownResetPassArea} />
         }
      </div>
   );
}


export default Login;