import React, { useState } from 'react';
import cn from 'classnames';
import s from './Login.module.css';

import LoginForm from './LoginForm/LoginForm';
import ResetPasswordForm from './ResetPasswordForm/ResetPasswordForm';

const Login = (props) => {
   const [shownResetPassArea, setShownResetPassArea] = useState(false);

   const toggleShownResetPassArea = () => {
      shownResetPassArea ?
         setShownResetPassArea(false) :
         setShownResetPassArea(true);
   }

   return (
      <div className={cn(s.block, 'main-page')}>
         <h2 className={cn(s.title, 'main-page__title')}>Sign In</h2>
         <LoginForm captchaUrl={props.captchaUrl}
            isSubmiting={props.isSubmiting}
            toggleShownResetPassArea={toggleShownResetPassArea}
            onSubmit={props.sendLoginData} />
         {shownResetPassArea &&
            <ResetPasswordForm
               toggleShownResetPassArea={toggleShownResetPassArea} />
         }
      </div>
   );
}


export default Login;