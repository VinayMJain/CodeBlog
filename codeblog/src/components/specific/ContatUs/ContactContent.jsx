import styles from './ContactContent.module.css'
function ContactContent(){
    return (
        <div 
            className={styles.contentDiv}>
                <h1 className={styles.contentDivHeading}>
                    Contact <span className={styles.contentDivSpan}>Us</span>
                </h1>
                <p className={styles.contentDivP1}>
                    Got questions? Need help? Want to collaborate? Reach out to us!
                </p>
                <div 
                    className={styles.icons}>
                        <img className={styles.iconsImg} src="images/cell.png">
                        </img>
                        <p className={styles.contentDivPara}>
                            +91 9876543210
                        </p>
                </div>
                <div 
                    className={styles.icons}>
                        <img className={styles.iconsImg} src="images/mail.png">
                        </img>
                        <p className={styles.contentDivPara}>
                            codeblog25@gmail.com
                        </p>
                </div>
                <div 
                    className={styles.icons}>
                        <img className={styles.iconsImg} src="images/location.svg">
                        </img>
                        <p className={styles.contentDivPara}>
                            Vadodara, Gujarat
                        </p>
                </div>
    </div>
    );
}

export default ContactContent