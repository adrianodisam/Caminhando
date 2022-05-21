import React from 'react';
import styles from './CardsSobre.module.css';
import ajudaImg from '../imgs/002-heart 3.png';
const CardsSobre = () => {
  return (
    <div className={styles.sobreCard}>
      <img src={ajudaImg} alt="ajuda" />
    </div>
  );
};

export default CardsSobre;
