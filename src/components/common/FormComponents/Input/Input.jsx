import React from 'react';
import s from './Input.module.css';

const Input = ({input, meta, ...props}) => {
   const error = meta.touched && meta.error;
   return (
      <div className={s.block}>
         <input {...input} {...props} />
         {error && <span>{meta.error}</span>}
      </div>
   );
}


export default Input;