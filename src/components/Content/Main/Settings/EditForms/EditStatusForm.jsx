import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './EditStatusForm.module.css';

import { MyTextarea } from '../../../../common/FormComponents/FormComponents';
import Button from '../../../../common/Button/Button';

const EditStatusForm = (props) => {
   return (
      <Formik
         initialValues={{
            status: props.status || ''
         }}
         validationSchema={Yup.object({
            status: Yup.string()
               .required('Required field!')
               .max(300, 'Must be 300 characters or less!')
         })}
         onSubmit={({ status }, { setSubmitting }) => {
            props.updateStatus(status);
            setSubmitting(false);
         }} >
         {formik =>
            <Form className={s.block}>
               <div className={s.textArea}>
                  <MyTextarea
                     name={'status'}
                     placeholder={'enter your new status'} />
               </div>
               <div className={s.buttons}>
                  <Button
                     type={'submit'}
                     text={'save'}
                     disabled={formik.isSubmitting} />
               </div>
            </Form>}
      </Formik>
   );
}


export default EditStatusForm;