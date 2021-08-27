import React from 'react';
import cn from 'classnames';
import { useField } from 'formik';
import s from './FormComponents.module.css';

export const MyInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   const error = meta.touched && meta.error;

   return (
      <div className={s.textInput}>
         <input className={cn({[s.hasError]: error})} {...field} {...props} />
         {error && <span className={s.errorMessage}>{meta.error}</span>}
      </div>
   );
}

export const MyTextarea = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   const error = meta.touched && meta.error;

   return (
      <div className={s.textArea}>
         <textarea className={cn({[s.hasError]: error})} {...field} {...props} />
         {error && <span>{meta.error}</span>}
      </div>
   );
}

export const MyCheckbox = ({ children, ...props }) => {
   const [field, meta] = useField({...props, type: 'checkbox'});
   const error = meta.touched && meta.error;

   return (
      <div className={s.checkbox}>
         <input type="checkbox" {...field} {...props} />
         {children}
         {error && <span>{meta.error}</span>}
      </div>
   );
}