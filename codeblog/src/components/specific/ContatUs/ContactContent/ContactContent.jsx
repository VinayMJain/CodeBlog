import React from 'react';
import styles from './ContactContent.module.css';

function ContactContent() {
  return (
    <div 
      className={styles.contentDiv} 
      id='contactUsContentDiv'
    >
      <h1 
        className={styles.contentDivHeading} 
        id='contentHeading'
      >
        Contact <span className={styles.contentDivSpan}>Us</span>
      </h1>
      <p 
        className={styles.contentDivP1} 
        id='contentPara'
      >
        Got questions? Need help? Want to collaborate? Reach out to us!
      </p>
      <div 
        className={styles.icons} 
        id='iconsDiv1'
      >
        <img 
          alt="Cellphone Icon" 
          className={styles.iconsImg} 
          id='iconsImg1' 
          src="images/cell.png" 
        />
        <p 
          className={styles.contentDivPara} 
          id='iconsPara1'
        >
          +91 9876543210
        </p>
      </div>
      <div 
        className={styles.icons} 
        id='iconsDiv2'
      >
        <img 
          alt="Mail Icon" 
          className={styles.iconsImg} 
          id='iconsImg2' 
          src="images/mail.png" 
        />
        <p 
          className={styles.contentDivPara} 
          id='iconsPara2'
        >
          codeblog25@gmail.com
        </p>
      </div>
      <div 
        className={styles.icons} 
        id='iconsDiv3'
      >
        <img 
          alt="Location Icon" 
          className={styles.iconsImg} 
          id='iconsImg3' 
          src="images/location.svg" 
        />
        <p 
          className={styles.contentDivPara} 
          id='iconsPara3'
        >
          Vadodara, Gujarat
        </p>
      </div>
    </div>
  );
}

export default ContactContent;
