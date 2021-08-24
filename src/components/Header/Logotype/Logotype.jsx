import React from 'react';
import s from './Logotype.module.css';
import logotype from '../../../assets/logotype.png';

const Logotype = (props) => {
   return (
      <div className={s.block}>
         <img src={logotype} alt="logo" />
      </div>
   );
}


export default Logotype;