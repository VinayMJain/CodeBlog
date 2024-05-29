import styles from './ContactForm.module.css';
import Button from "../../common/Button/Button"

function ContactForm(){
    return (
        <div className={styles.formDiv} id="formDiv">
            <form
                action="#" 
                className={styles.contactForm}
                id = "contactForm"
                method="#">
                    <label 
                        for="name">
                            Name:
                    </label>
                    <input 
                        className={styles.formInput}
                        type="text" 
                        id="name" 
                        name="name" 
                        required>
                    </input>
                    <br></br>
                    <label 
                        for="email">
                            Email:
                    </label>
                    <input 
                        className={styles.formInput}
                        type="email" 
                        id="email" 
                        name="email" 
                        required>
                    </input>
                    <br></br>
                    <label 
                        for="message">
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
                    {/* <button 
                        type="submit">
                            Submit
                    </button> */}
            </form>
        </div>
    );
}

export default ContactForm