// import React from 'react';
import styles from './Button.module.css';

const Button = ({ buttonText }) => {
    return (
            <button 
                className={styles.autoResizeButton}
                id={`autoResizeButtonId-${buttonText}`} 
            >
                {buttonText}
            </button>
    );
};

export default Button;

