import React from 'react';
import Header from '../Header/Header';
import Sobre from '../Sobre/Sobre';
import styles from './container.module.css';

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Sobre />
    </div>
  );
};

export default Container;
