import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id='mainId'>
      <div className={styles.footerMain} id='mainId1'>
        <div className={styles.footerDiv1} id='divId1'>
          <h3 className={styles.h2} id='h2Id'>Code-Blog</h3>
          <p id='footerDiv1P1'>Get the latest coding tips and insights! <br /> Subscribe to CodeBlog's newsletter.</p>
          <div className={styles.subscribeForm} id='formId'>
            <input type="email" className={styles.email} id='emailId' name="email" placeholder="Enter your email" required />
            <button type="submit" className={styles.subscribeButton} id='buttonId'>→</button>
          </div>
        </div>
        <div className={styles.footerDiv2} id='divId2'>
          <div className={styles.footerLink} id='linkId'>
            <h3 id='footerDiv2hId' >Company</h3>
            <ul id='footerUl1'>
              <li><a href="#" id='ulId1'>Home</a></li>
              <li><a href="#" id='ulId2'>About</a></li>
              <li><a href="#" id='ulId3'>Career</a></li>
              <li><a href="#" id='ilId4'>Contact</a></li>
            </ul>
          </div>
          <div className={styles.footerLink} id='linkId'>
            <h3 id='linkH3id1'>Documentation</h3>
            <ul id='footerUl2'>
              <li><a href="#" id='linkUlL1'>Help Centre</a></li>
              <li><a href="#" id='linkUlL12'>FAQ</a></li>
              <li><a href="#" id='linkUlL3'>Privacy Policy</a></li>
            </ul>
          </div>
          <div className={styles.footerLink} id='linkId'>
            <h3 id='linkIdh3Id2'>Social</h3>
            <ul id='footerUl3'>
              <li><a href="#" id='linkUlLi1'>Facebook</a></li>
              <li><a href="#"  id='linkUlLi2'>Instagram</a></li>
              <li><a href="#"  id='linkUlLi3'>Youtube</a></li>
              <li><a href="#"  id='linkUlLi4'>Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerLast} id='lastId'></div>
      <div className={styles.copyRight} id='copyRightId'>
        <p className={styles.p1} id='copyRightPid'>© Code-Blog Inc. All Rights Reserved 2024 <a href="#">Terms & Conditions</a></p>
      </div>
    </footer>
  );
};

export default Footer;
