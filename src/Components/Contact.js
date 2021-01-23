import React from 'react';
import styles from './Contact.module.css';
import photo from '../img/contact.jpg';
import Head from './Head';

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Contact" description="Contact me" />
      <img src={photo} alt="Typewriter" />
      <div>
        <h1>Contact me</h1>
        <ul className={styles.datas}>
          <li>rafaelofil@outlook.com</li>
          <li>99999-9999</li>
          <li>Street Ali Perto, 531</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
