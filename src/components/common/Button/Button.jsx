import React from 'react';
import cn from 'classnames';
import s from './Button.module.css';

const Button = ({text, className, ...props}) => {
   return (
      <button className={cn(s.block, className)} {...props}>{text}</button>
   );
}


export default Button;