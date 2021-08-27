import React, { useState } from 'react';
import cn from 'classnames';
import s from './Pagination.module.css';

import Button from '../Button/Button';

const Pagination = (props) => {
   const pagesCount = Math.ceil(props.totalItemsCout / props.pageItemsCount);
   const pages = [];
   for (let i = 1; i <= pagesCount; i++) pages.push(i);

   const portionsCount = Math.ceil(pagesCount / props.pagePortionsCount);
   const [currentPortion, setCurrentPortion] = useState(0);
   const portionFirstElem = (currentPortion * props.pagePortionsCount) + 1;
   const portionLastElem = (currentPortion + 1) * props.pagePortionsCount;

   const itemsFirstElem = (props.currentPage - 1) * props.pageItemsCount + 1;
   const itemsLastElem = (props.currentPage * props.pageItemsCount) > props.totalItemsCout ?
      props.totalItemsCout : (props.currentPage * props.pageItemsCount);

   const pagination = pages.filter(page => {
      return portionFirstElem <= page && page <= portionLastElem;
   }).map(page => {
      return <Button key={page} text={page}
         className={cn({
            [s.isActive]: page === props.currentPage
         })}
         onClick={() => props.pageChange(page)} />
   });

   const available = props.totalItemsCout > 0;

   if (!available) return <p>Sorry, nothing was found.</p>

   return (
      <>
         <div className={s.block}>
            <Button text={'<<'}
               disabled={currentPortion === 0}
               onClick={() => setCurrentPortion(0)} />
            <Button text={'<'}
               disabled={currentPortion === 0}
               onClick={() => setCurrentPortion(currentPortion - 1)} />
            {pagination}
            <Button text={'>'}
               disabled={currentPortion === (portionsCount - 1)}
               onClick={() => setCurrentPortion(currentPortion + 1)} />
            <Button text={'>>'}
               disabled={currentPortion === (portionsCount - 1)}
               onClick={() => setCurrentPortion(portionsCount - 1)} />
         </div>
         <p className={s.itemsCountInfo}>Viewing {itemsFirstElem} -
            {itemsLastElem} of {props.totalItemsCout} {props.listName}</p>
      </>
   );
}


export default Pagination;