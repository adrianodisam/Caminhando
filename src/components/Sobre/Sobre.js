import React from 'react';
import styles from './Sobre.module.css';
import ajudaImg from '../imgs/002-heart 3.png';
import CardsSobre from './CardsSobre';
const Sobre = () => {
  return (
    <div className={styles.sobre}>
      <div className={styles.divSobre}>
        <p className={styles.nosSobre}>SOBRE NÓS</p>
        <p className={styles.instSobre}>Conheça a instituição </p>
      </div>
      <div className={styles.divSobreCard}>
        <CardsSobre
          imagem={ajudaImg}
          texto="Nossos projetos"
          cores={styles.divSobre}
        />
        <CardsSobre
          imagem={ajudaImg}
          texto="Nossos projetos"
          cores={styles.divSobre}
        />
        <CardsSobre
          imagem={ajudaImg}
          texto="Nossos projetos"
          cores={styles.divSobre}
        />
      </div>
    </div>
  );
};

export default Sobre;
