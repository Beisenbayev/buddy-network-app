import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './EditDataForm.module.css';

import {
   MyInput, MyTextarea, MyCheckbox
} from '../../../../common/FormComponents/FormComponents';
import Button from '../../../../common/Button/Button';

const EditDataForm = (props) => {
   const contactInputs = Object.keys(props.profile.contacts).map((contact, index) => {
      return <div key={index}>
         <MyInput
            name={`contacts.${contact}`}
            type={'url'}
            label={`${contact}:`} />
      </div>
   })

   return (
      <Formik
         initialValues={{
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe || '',
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription || '',
            contacts: {
               github: props.profile.contacts.github || '',
               vk: props.profile.contacts.vk || '',
               facebook: props.profile.contacts.facebook || '',
               instagram: props.profile.contacts.instagram || '',
               twitter: props.profile.contacts.twitter || '',
               website: props.profile.contacts.website || '',
               youtube: props.profile.contacts.youtube || '',
               mainLink: props.profile.contacts.mainLink || '',
            },
         }}
         validationSchema={Yup.object({
            fullName: Yup.string()
               .required('Required field!')
               .max(30, 'Must be 30 characters or less!'),
            aboutMe: Yup.string()
               .required('Required field!')
               .max(300, 'Must be 300 characters or less!'),
            lookingForAJob: Yup.boolean(),
            lookingForAJobDescription: Yup.string()
               .when('lookingForAJob', {
                  is: true,
                  then: Yup.string()
                     .required('Required field!')
                     .max(300, 'Must be 300 characters or less!')
                     .min(5, 'Must be 3 characters or more!'),
               })
         })}
         onSubmit={(values, { setSubmitting }) => {
            props.updateProfile(values);
            setSubmitting(false);
         }} >
         {formik =>
            <Form className={s.block}>
               <div>
                  <MyInput
                     name={'fullName'}
                     label={'Name: '} />
               </div>
               <div>
                  <MyTextarea
                     name={'aboutMe'}
                     label={'About me: '} />
               </div>
               <div className={s.jobStatus}>
                  <MyCheckbox name={'lookingForAJob'}>
                     <span>Looking for a job</span>
                  </MyCheckbox>
               </div>
               <div>
                  <MyTextarea
                     name={'lookingForAJobDescription'}
                     label={'My skils: '} />
               </div>
               {contactInputs}
               <div className={s.buttons}>
                  <Button type={'submit'}
                     text={'Save'}
                     disabled={formik.isSubmitting} />
               </div>
            </Form>
         }

      </Formik>
   );
}


export default EditDataForm;