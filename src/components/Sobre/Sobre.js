import React from 'react';
import styles from './Sobre.module.css';
import ajudaImg from '../imgs/002-heart 3.png';
const Sobre = () => {
  return (
    <div className={styles.sobre}>
      <div className={styles.divSobre}>
        <p className={styles.nosSobre}>SOBRE NÓS</p>
        <p className={styles.instSobre}>Conheça a instituição </p>
      </div>
      <div className={styles.divSobreCard}>
        <div className={styles.sobreCard}>
          <img src={ajudaImg} alt="" />

          <p>Ajude a instituição</p>
        </div>
        <div className={styles.sobreCard}>
          <img src={ajudaImg} alt="" />
          <p>Nossos projetos</p>
        </div>
        <div className={styles.sobreCard}>
          <img src={ajudaImg} alt="" />
          <p>quem somos</p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
