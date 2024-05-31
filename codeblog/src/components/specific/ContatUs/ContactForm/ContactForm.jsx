import styles from './ContactForm.module.css';
import Button from "../../../common/Button/Button"

function ContactForm(){
    return (
        <div 
            className={styles.formDiv} 
            id="contactUsFormDiv">
            <form
                action="#" 
                className={styles.contactForm}
                id = "contactForm"
                method="#">
                    <label 
                        for="name"
                        id='contactLabel1'>
                            Name:
                    </label>
                    <input 
                        className={styles.formInput}
                        id="name" 
                        name="name" 
                        required
                        type="text"> 
                    </input>
                    <br></br>
                    <label 
                        for="email"
                        id='contactLabel2'>
                            Email:
                    </label>
                    <input 
                        className={styles.formInput}
                        id="email" 
                        name="email" 
                        required
                        type="email"> 
                    </input>
                    <br></br>
                    <label 
                        for="message"
                        id='contactLabel3'>
                            Message:
                    </label>
                    <textarea 
                        className={styles.formTextarea}
                        id="message" 
                        name="message" 
                        required>
                    </textarea>
                    <br></br>
                    <Button buttonText="Submit"/>
            </form>
        </div>
    );
}

export default ContactForm