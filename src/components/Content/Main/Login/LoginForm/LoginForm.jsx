import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FaQuestionCircle } from 'react-icons/fa';
import {
   required, maxLengthCreater, minLengthCreater
} from '../../../../../utils/validators.js';
import s from './LoginForm.module.css';

import Input from '../../../../common/FormComponents/Input/Input.jsx';
import Button from '../../../../common/Button/Button';

const minLength5 = minLengthCreater(5);
const maxLength30 = maxLengthCreater(30);

const LoginForm = (props) => {
   return (
      <form className={s.block} onSubmit={props.handleSubmit} >
         <div className={s.loginArea}>
            <Field name={'email'}
               component={Input}
               type={'email'}
               placeholder={'Email'}
               validate={[required, maxLength30, minLength5]} />
         </div>
         <div className={s.passwordArea}>
            <Field name={'password'}
               component={Input}
               type={'password'}
               placeholder={'Password'}
               validate={[required]} />
         </div>
         <div className={s.rememberMeArea}>
            <Field name={'rememberMe'}
               component={'input'}
               type={'checkbox'} />
            <span>Remember me</span>
         </div>
         {props.captchaUrl &&
            <div className={s.captchaArea}>
               <img src={props.captchaUrl} alt="" />
               <Field name={'captcha'}
                  component={Input}
                  placeholder={'captha symbols'}
                  validate={[required]} />
            </div>
         }
         <div className={s.buttons}>
            <Button text={'Sign In'} disabled={props.isSubmiting} />
         </div>
         {props.isSubmiting && <p>Verifying...</p>}
         {props.error && <p className={s.errorText}>{props.error}</p>}
         <div className={s.forgetPassword}>
            <p onClick={props.toggleShownResetPassArea}>
               <FaQuestionCircle /><span>Forget Password</span>
            </p>
         </div>
      </form>
   );
}


export default reduxForm({
   form: 'loginForm'
})(LoginForm);