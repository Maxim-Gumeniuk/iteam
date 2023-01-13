import React from 'react';
import styles from './BadRequest.module.scss';

export const BadRequest: React.FC = () => {
  return (
    <div className={styles.box}>
      <p className={styles.text}>Bad Request!..</p>
    </div>
  );
}