import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Header from '@/components/header/Header';
import HomeSwipper from '@/components/swippers/HomeSwipper';

const Home = () => {
  const [countdown, setCountdown] = useState('');

  // Set the target date for the countdown (replace with your desired end date)
  const targetDate = new Date('2023-12-31T23:59:59').getTime();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setCountdown('Countdown expired');
      }
    };

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(countdownInterval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run this effect only once on component mount

  return (
    <>
      <Head>
        {/* Add necessary meta-data here */}
        <title>Sua Página</title>
      </Head>

      <Header />

      <main className={styles.page}>
        <div className={styles.content}>
          <div className={styles.swipper__wrapper}>
            <div className={styles.banner}>
              <div className={styles.comprador}>
                <p>Último Comprador: </p>
                <span> Kaique Costa</span>
              </div>
              <div className={styles.termina}>
                <p>Termina em: </p>
                <span> {countdown}</span>
              </div>
            </div>
            <HomeSwipper />
          </div>
          <div className={styles.left__cards}>
            <h2>Kaique</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
