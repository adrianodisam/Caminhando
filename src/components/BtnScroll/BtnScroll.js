import React from 'react';
import styles from './BtnScroll.module.css';
import btnScroll from '../imgs/Arrow.png';
const BtnScroll = () => {
  return (
    <div className={styles.btnDivScroll}>
      <img src={btnScroll} alt="" />
    </div>
  );
};

export default BtnScroll;
