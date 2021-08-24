import React from 'react';
import cn from 'classnames';
import s from './Preloader.module.css';
import preloader from '../../../assets/preloader.svg';

const Preloader = (className, ...props) => {
   return (
      <div className={cn(s.block, className)}>
         <img src={preloader} alt="" />
      </div>
   );
}


export default Preloader;