import React, { useState } from 'react';
import styles from './LoginForm.module.css'; // Import your module CSS file
import Button from '../../common/Button/Button';

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div 
            id="loginFormContainerId" 
            className={styles.container}
        >
            <div 
                id="loginContainerId" 
                className={styles.loginContainer}
            >
                <div 
                    id="loginFormId" 
                    className={styles.loginForm}
                >
                    <div 
                        id="formHeaderId" 
                        className={styles.formHeader}
                    >
                        <div 
                            id="logoId" 
                            className={styles.logo}
                        >
                            <a href="index.html" id="redirectHomeId">
                                <img 
                                    id="logoImageId" 
                                    src="images/logo1.png" 
                                    alt="CodeBlog Logo" 
                                />
                                <h1 id="logoTextId">CodeBlog</h1>
                            </a>
                        </div>
                        <h2 id="welcomeTextId">Welcome to CodeBlog</h2>
                        <p id="getStartedTextId">Let&apos;s get started!</p>
                    </div>
                    <div 
                        id="emailInputContainerId" 
                        className={styles.inputContainer}
                    >
                        <input 
                            type="email" 
                            id="emailInputId" 
                            className={styles.inputField} 
                            required 
                        />
                        <label 
                            id='emailInputContainerLabelId' 
                            htmlFor="emailInput" 
                            className={styles.inputLabel}
                        >
                            Email
                        </label>
                    </div>
                    <div 
                        id="passwordInputContainerId" 
                        className={`${styles.inputContainer} ${styles.passwordContainer}`}
                    >
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            id="passwordInputId" 
                            className={styles.inputField} 
                            required 
                        />
                        <label 
                            id="passwordInputContainerLabelId" 
                            htmlFor="passwordInput" 
                            className={styles.inputLabel}
                        >
                            Password
                        </label>
                        <img 
                            id="togglePasswordVisibilityImageId" 
                            src={passwordVisible ? "images/Openeye.png" : "images/Closeeye.png"} 
                            alt={passwordVisible ? "Show Password" : "Hide Password"} 
                            onClick={togglePasswordVisibility} 
                            className={styles.eyeIcon} 
                        />
                    </div>
                    <Button id="submitButtonId" buttonText="Submit" />
                    <Button id="continueWithEmailButtonId" buttonText="Continue with email" />

                    <p id="registerPromptId" className={styles.registerPrompt}>Don&apos;t have an account? <a href="SignUp.html">Register</a></p>
                </div>
                <div 
                    id="loginImageContainerId" 
                    className={styles.loginImage}
                >
                    <img 
                        id="loginImageId" 
                        src="images/login7.webp" 
                        alt="Login Visual" 
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
