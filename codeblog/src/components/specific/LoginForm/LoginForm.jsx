import React, { useState } from 'react';
import styles from './LoginForm.module.css'; // Import your module CSS file
import Btn from '../../common/Button/Button';

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div id="loginFormContainer" className={styles.container}>
            <div id="loginContainer" className={styles.loginContainer}>
                <div id="loginForm" className={styles.loginForm}>
                    <div id="formHeader" className={styles.formHeader}>
                        <div id="logo" className={styles.logo}>
                            <a href="index.html">
                                <img id="logoImage" src="images/logo1.png" alt="CodeBlog Logo" />
                                <h1 id="logoText">CodeBlog</h1>
                            </a>
                        </div>
                        <h2 id="welcomeText">Welcome to CodeBlog</h2>
                        <p id="getStartedText">Let&apos;s get started!</p>
                    </div>
                    <div id="emailInputContainer" className={styles.inputContainer}>
                        <input type="email" id="emailInput" className={styles.inputField} required />
                        <label id='emailInputContainerLabel' htmlFor="emailInput" className={styles.inputLabel}>Email</label>
                    </div>
                    <div id="passwordInputContainer" className={`${styles.inputContainer} ${styles.passwordContainer}`}>
                        <input type={passwordVisible ? "text" : "password"} id="passwordInput" className={styles.inputField} required />
                        <label id="passwordInputContainerLabel"htmlFor="passwordInput" className={styles.inputLabel}>Password</label>
                        <img id="togglePasswordVisibilityImage" src={passwordVisible ? "images/Openeye.png" : "images/Closeeye.png"} alt={passwordVisible ? "Show Password" : "Hide Password"} onClick={togglePasswordVisibility} className={styles.eyeIcon} />
                    </div>
                    <Btn id="submitButton" buttonText="Submit" />
                    <Btn id="continueWithEmailButton" buttonText="Continue with email" />

                    <p id="registerPrompt" className={styles.registerPrompt}>Don&apos;t have an account? <a href="SignUp.html">Register</a></p>
                </div>
                <div id="loginImageContainer" className={styles.loginImage}>
                    <img id="loginImage" src="images/login7.webp" alt="Login Visual" />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
