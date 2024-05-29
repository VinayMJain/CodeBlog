
import ContactForm from './ContactForm.jsx';
import ContactContent from './ContactContent.jsx';
import styles from './ContactUsParentComponent.module.css';
function ContactUs(){
    return (
        <div className={styles.mainDiv}>
            <ContactForm/>
            <ContactContent/>
      </div>
    );
}

export default ContactUs