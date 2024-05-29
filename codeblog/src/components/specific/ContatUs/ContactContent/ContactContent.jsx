import styles from './ContactContent.module.css'
function ContactContent(){
    return (
        <div 
            className={styles.contentDiv}
            id='contentDiv'>
                <h1 className={styles.contentDivHeading}
                    id='contentHeading'>
                    Contact <span className={styles.contentDivSpan}>Us</span>
                </h1>
                <p className={styles.contentDivP1}
                    id='contentPara'>
                    Got questions? Need help? Want to collaborate? Reach out to us!
                </p>
                <div 
                    className={styles.icons}
                    id='iconsDiv'>
                        <img 
                            className={styles.iconsImg}
                            id='iconsImg' 
                            src="images/cell.png">
                        </img>
                        <p 
                            className={styles.contentDivPara}
                            id='iconsPara'>
                            +91 9876543210
                        </p>
                </div>
                <div 
                    className={styles.icons}
                    id='iconsDiv'>
                        <img 
                            className={styles.iconsImg} 
                            id='iconsImg'
                            src="images/mail.png">
                        </img>
                        <p 
                            className={styles.contentDivPara}
                            id='iconsPara'>
                            codeblog25@gmail.com
                        </p>
                </div>
                <div 
                    className={styles.icons}
                    id='iconsDiv'>
                        <img 
                            className={styles.iconsImg} 
                            id='iconsImg' 
                            src="images/location.svg">
                        </img>
                        <p 
                            className={styles.contentDivPara}
                            id='iconsPara'>
                            Vadodara, Gujarat
                        </p>
                </div>
    </div>
    );
}

export default ContactContent