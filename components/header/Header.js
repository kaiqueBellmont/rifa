import React, { useEffect, useState } from 'react';
import { FaTicketAlt, FaWhatsapp, FaBars } from 'react-icons/fa';
import styles from './Header.module.scss';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false); // Set initial state

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    // Adiciona o ouvinte de evento de redimensionamento
    window.addEventListener('resize', handleResize);

    // Chama a função handleResize uma vez no início para verificar o tamanho da tela
    handleResize();

    // Remove o ouvinte de evento de redimensionamento no desmonte do componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Executa useEffect uma vez no início

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/assets/images/logo.svg" alt="" />
        </div>

        {isMobile ? (
          <div className={styles.menu}>
            <FaBars style={{ color: '#ffffff' }} />

          </div>

        ) : (
          <div className={styles.nav}>
            <button className={styles.button}>
              <FaTicketAlt style={{ color: '#ffffff' }} />
              Campanhas
            </button>
            <button className={styles.button}>
              <FaWhatsapp style={{ color: '#ffffff' }} />
              Contato
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
