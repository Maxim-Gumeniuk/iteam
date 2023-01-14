import React from 'react';
import styles from './smallLoader.module.scss';

export const SmallLoader: React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.square}></div>
      <div className={styles.second}></div>
    </div>
  );
};