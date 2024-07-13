
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}
      id='footerMain'>
      <div 
        className={styles.footerMain} 
        id='footerMainDiv'
      >
        <div 
          className={styles.footerDiv1} 
          id='footerDiv1'
        >
          <h3 
            className={styles.h3} 
            id='footerH3'
          >
            Code-Blog
          </h3>
          <p id='footerDiv1P1'>
            Get the latest coding tips and insights!
            <br />
            Subscribe to CodeBlog's newsletter.
          </p>
          <div className={styles.subscribeForm} id='subscribeForm'>
            <input
              className={styles.email}
              id='emailInput'
              name="email"
              placeholder="Enter your email"
              required
              type="email"
            />
            <button
              className={styles.subscribeButton}
              id='subscribeButton'
              type="submit"
            >
              →
            </button>
          </div>
        </div>
        <div 
          className={styles.footerDiv2} 
          id='footerDiv2'
          >
          <div 
            className={styles.footerLink} 
            id='footerLink1'
          >
            <h3 id='companyH3'>Company</h3>
            <ul id='companyLinks'>
              <li id='companyLi1'><a href="#" id='homeLink'>Home</a></li>
              <li id='companyLi2'><a href="#" id='aboutLink'>About</a></li>
              <li id='companyLi3'><a href="#" id='careerLink'>Career</a></li>
              <li id='companyLi4'><a href="#" id='contactLink'>Contact</a></li>
            </ul>
          </div>
          <div 
            className={styles.footerLink} 
            id='footerLink2'
          >
            <h3 id='documentationH3'>
              Documentation
            </h3>
            <ul id='documentationLinks'>
              <li id='docLi1'><a href="#" id='helpCentreLink'>Help Centre</a></li>
              <li id='docLi2'><a href="#" id='faqLink'>FAQ</a></li>
              <li id='docLi3'><a href="#" id='privacyPolicyLink'>Privacy Policy</a></li>
            </ul>
          </div>
          <div 
            className={styles.footerLink} 
            id='footerLink3'
          >
            <h3 id='socialH3'>
              Social
            </h3>
            <ul id='socialLinks'>
              <li id='socialL1'><a href="#" id='facebookLink'>Facebook</a></li>
              <li id='socialL2'><a href="#" id='instagramLink'>Instagram</a></li>
              <li id='socialL3'><a href="#" id='youtubeLink'>YouTube</a></li>
              <li id='socialL4'><a href="#" id='twitterLink'>Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div 
        className={styles.footerLast} 
        id='footerLast'
      >
      </div>
      <div 
        className={styles.copyRight} 
        id='copyRight'
      >
        <p 
          className={styles.p1} 
          id='copyRightP'
        >
          © Code-Blog Inc. All Rights Reserved 2024
          <a href="#">
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
