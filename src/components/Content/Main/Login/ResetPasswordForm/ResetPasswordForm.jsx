import React from 'react';
import cn from 'classnames';
import s from './ResetPasswordForm.module.css';

import Button from '../../../../common/Button/Button';

const ResetPasswordForm = (props) => {
   return (
      <div className={cn(s.block, 'widget')}>
         <h3 className={cn(s.title, 'widget__title')}>Forget Password?</h3>
         <p>Relax and try to remember your password.</p>
         <Button text={'Thanks!'}
            onClick={() => props.toggleShownResetPassArea()} />
      </div>
   );
}


export default ResetPasswordForm;