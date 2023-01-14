import React, { useState } from 'react';
import styles from './price.module.scss';
import classNames from 'classnames';

type Props = {
  setOpen: (param: any) => void;
  setOpenForDate: (param: any) => void;
}

export const Price: React.FC<Props> = ({ setOpen, setOpenForDate}) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('Price');
  const handleOpen = () => {
    setModal((prev: any) => !prev);
  }

  const opened = () => {
    setOpen((prev: any) => !prev);
    setTitle('Price');
    
  }

  const openByDate = () => {
    setOpenForDate((prev: any) => !prev);
    setTitle('Publish Date');
  }
  return (
    <>
      <div 
        className={
          classNames(
            modal 
            ? styles.openPrice
            : styles.price
          )
        }
        onClick={() => handleOpen()}
      >
        <p className={styles.text}>{title}</p>
        {
        modal && (
           <div className={styles.open}>
              <p 
                className={styles.firstOption} 
                onClick={() => opened()}
              >
                Price
              </p>
              <p 
                className={styles.secondOption} 
                onClick={() => openByDate()}
              >
                Publish Date
              </p>
            </div>
          )
        }
      </div>
    </>
  )
}