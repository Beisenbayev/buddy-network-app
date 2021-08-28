import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import avatarCreater from '../../../../../utils/avatarCreater';
import s from './EditAvatarForm.module.css';

import Button from '../../../../common/Button/Button';

const EditAvatarForm = (props) => {
   return (
      <Formik
         initialValues={{
            imageFile: []
         }}
         validationSchema={Yup.object({
            imageFile: Yup.array().min(1, "first select the file")
         })}
         onSubmit={({ imageFile }, { setSubmitting }) => {
            props.updateAvatar(imageFile[0]);
            setSubmitting(false);
         }}>
         {formik =>
            <Form className={s.block}>
               <div className={s.currentAvatar}>
                  <img src={props.profile.photos.small} alt="" />
               </div>
               <div className={s.uploadArea}>
                  <div className={s.fileInput}>
                     <input
                        name='imageFile'
                        type="file"
                        onChange={(event) => {
                           const filesArray = Array.from(event.currentTarget.files);
                           formik.setFieldValue("imageFile", filesArray)
                        }} />
                     <span className={s.errorMessage}><ErrorMessage name='imageFile' /></span>
                  </div>
                  <div className={s.buttons}>
                     <Button type='submit' text={'save'} disabled={formik.isSubmitting} />
                  </div>
               </div>
            </Form>
         }
      </Formik>
   );
}


export default EditAvatarForm;