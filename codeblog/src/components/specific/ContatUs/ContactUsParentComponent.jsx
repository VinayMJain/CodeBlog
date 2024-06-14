
import ContactForm from './ContactForm/ContactForm';
import ContactContent from './ContactContent/ContactContent';
import styles from './ContactUsParentComponent.module.css';
function ContactUs(){
    console.log("ContactUs.jsx rendered");
    return (
        <div 
            className={styles.mainDiv}
            id='contactUsMainDiv'
        >
            <ContactForm/>
            <ContactContent/>
        </div>
    );
}

export default ContactUs