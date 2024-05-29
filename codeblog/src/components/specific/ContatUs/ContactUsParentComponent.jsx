
import ContactForm from './ContactForm/ContactForm';
import ContactContent from './ContactContent/ContactContent';
import styles from './ContactUsParentComponent.module.css';
function ContactUs(){
    return (
        <div 
            className={styles.mainDiv}
            id='mainDiv'>
            <ContactForm/>
            <ContactContent/>
      </div>
    );
}

export default ContactUs