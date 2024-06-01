import React from 'react';
import styles from './ContactForm.module.css';
import Button from '../../../common/Button/Button';

function ContactForm() {
  return (
    <div 
      className={styles.formDiv} 
      id="contactUsFormDiv"
    >
      <form 
        action="#" 
        className={styles.contactForm} 
        id="contactForm" 
        method="#"
      >
        <label 
          htmlFor="name" 
          id='contactLabel1'
        >
          Name:
        </label>
        <input 
          className={styles.formInput} 
          id="name" 
          name="name" 
          required 
          type="text" 
        />
        <br />
        <label 
          htmlFor="email" 
          id='contactLabel2'
        >
          Email:
        </label>
        <input 
          className={styles.formInput} 
          id="email" 
          name="email" 
          required 
          type="email" 
        />
        <br />
        <label 
          htmlFor="message" 
          id='contactLabel3'
        >
          Message:
        </label>
        <textarea 
          className={styles.formTextarea} 
          id="message" 
          name="message" 
          required 
        />
        <br />
        <Button buttonText="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;
