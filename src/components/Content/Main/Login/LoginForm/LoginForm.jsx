import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaQuestionCircle } from 'react-icons/fa';
import s from './LoginForm.module.css';

import { MyInput, MyCheckbox } from '../../../../common/FormComponents/FormComponents';
import Button from '../../../../common/Button/Button';

const LoginForm = (props) => {
   return (
      <Formik
         initialValues={{
            email: '',
            password: '',
            rememberMe: false,
            captcha: '',
         }}
         validationSchema={Yup.object({
            email: Yup.string()
               .required('Required field!')
               .max(35, 'Must be 35 characters or less!')
               .min(5, 'Must be 5 characters or more!'),
            password: Yup.string()
               .required('Required field!')
               .max(25, 'Must be 25 characters or less!')
               .min(6, 'Must be 6 characters or more!'),
         })}
         onSubmit={(values) => props.sendLoginData(values)}>
         {/*use {setSubmitting, setFieldError, setStatus} to show API errors */}

         <Form className={s.block}>
            <div className={s.loginArea}>
               <MyInput name={'email'}
                  type={'email'}
                  placeholder={'Email'} />
            </div>

            <div className={s.passwordArea}>
               <MyInput name={'password'}
                  type={'password'}
                  placeholder={'Password'} />
            </div>

            <div className={s.rememberMeArea}>
               <MyCheckbox name={'rememberMe'}>
                  <span>Remember me</span>
               </MyCheckbox>
            </div>

            {props.captchaUrl &&
               <div className={s.captchaArea}>
                  <img src={props.captchaUrl} alt="" />
                  <MyInput name={'captcha'}
                     type={'text'}
                     placeholder={'Captha symbols'} />
               </div>
            }

            <div className={s.buttons}>
               <Button type="submit" text={'Sign In'} disabled={props.isSubmiting} />
            </div>

            {props.isSubmiting && <p>Verifying...</p>}
            {/* {props.error && <p className={s.errorText}>{props.error}</p>} */}

            <div className={s.forgetPassword}>
               <p onClick={props.toggleShownResetPassArea}>
                  <FaQuestionCircle /><span>Forget Password</span>
               </p>
            </div>
         </Form>
      </Formik>
   );
}


export default LoginForm;