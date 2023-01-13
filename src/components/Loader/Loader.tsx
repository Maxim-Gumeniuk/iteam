import React from 'react';
import styles from './loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.square}></div>
      <div className={styles.second}></div>
    </div>
  );
};