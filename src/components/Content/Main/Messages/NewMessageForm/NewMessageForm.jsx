import React from 'react';
import { Formik, Form } from 'formik';
import s from './NewMessageForm.module.css';

import { MyTextarea } from '../../../../common/FormComponents/FormComponents';
import Button from '../../../../common/Button/Button';

const NewMessageForm = (props) => {
   return (
      <Formik
         initialValues={{
            text: '',
         }}
         onSubmit={(values, { setSubmitting }) => {
            props.sendNewMessage(values.text);
            setSubmitting(false);
         }}>
         {formik =>
            <Form className={s.block}>
               <MyTextarea
                  name={'text'}
                  placeholder={'Message'} />
               <Button
                  type={'submit'}
                  text={'send'}
                  disabled={formik.isSubmitting} />
            </Form>
         }
      </Formik>
   );
}


export default NewMessageForm;