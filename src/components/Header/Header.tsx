import React, { useState } from 'react';
import styles from './header.module.scss';
import { Search } from '../Search/Search';
import { Price } from '../Price/Price';
import { Sort } from '../Sort/Sort';
import { First } from '../First/FIrst';

type Props = {
  setCurrentPage: (param: number) => void;
}

export const Header: React.FC<Props> = ({ setCurrentPage }) => {
  const [open, setOpen] = useState(false);
  const [openForDate, setOpenForDate] = useState(false);
  return(
    <div className={styles.row}>
      <First setCurrentPage={setCurrentPage}/>
      <Search />
      <Price 
        setOpen={setOpen} 
        setOpenForDate={setOpenForDate} 
      />
      <Sort 
        open={open} 
        setOpen={setOpen} 
        openForDate={openForDate}
        setOpenForDate={setOpenForDate}
      />
    </div>
  )
}