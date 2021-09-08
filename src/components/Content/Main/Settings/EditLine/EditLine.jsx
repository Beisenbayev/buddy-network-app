import React, { useState } from 'react';
import s from './EditLine.module.css';

const EditLine = (props) => {
   const [editMode, setEditMode] = useState(false);

   const toggleEditMode = () => {
      editMode ? setEditMode(false) : setEditMode(true);
   }

   return (
      <div className={s.block}>
         <div className={s.editingLine}>
            <h3>{props.title}</h3>
            {editMode ?
               <span onClick={toggleEditMode}>close</span> :
               <span onClick={toggleEditMode}>edit</span>}
         </div>
         {editMode && props.children}
      </div>
   );
}


export default EditLine;