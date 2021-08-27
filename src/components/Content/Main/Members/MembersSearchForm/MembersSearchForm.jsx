import React from 'react';
import { Formik, Form } from 'formik';
import s from './MembersSearchForm.module.css';

import { MyInput } from '../../../../common/FormComponents/FormComponents';
import Button from '../../../../common/Button/Button';
import { values } from 'lodash';

const MembersSearchForm = (props) => {
   return (
      <Formik
         initialValues={{ term: '' }}
         onSubmit={({ term }) => props.membersSearch(term)}>
         <Form className={s.block}>
            <MyInput name={'term'}
               type={'text'}
               placeholder={'search'} />
            <Button type="submit" text={'Search'} />
         </Form>
      </Formik>
   );
}


export default MembersSearchForm;