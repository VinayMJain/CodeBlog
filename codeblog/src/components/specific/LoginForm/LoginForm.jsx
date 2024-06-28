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
            className={styles.container}
            id="loginFormContainerId" 
        >
            <div 
                className={styles.loginContainer}
                id="loginContainerId" 
            >
                <div 
                    className={styles.loginForm}
                    id="loginFormId" 
                >
                    <div 
                        className={styles.formHeader}
                        id="formHeaderId" 
                    >
                        <div 
                            className={styles.logo}
                            id="logoId" 
                        >
                            <a 
                             href="index.html" 
                             id="redirectHomeId"
                            >
                                <img 
                                    alt="CodeBlog Logo" 
                                    id="logoImageId" 
                                    src="images/logo1.png" 
                                />
                                <h1 id="logoTextId">CodeBlog</h1>
                            </a>
                        </div>
                        <h2 id="welcomeTextId">Welcome to CodeBlog</h2>
                        <p id="getStartedTextId">Let&apos;s get started!</p>
                    </div>
                    <div 
                        className={styles.inputContainer}
                        id="emailInputContainerId" 
                    >
                        <input 
                            className={styles.inputField} 
                            id="emailInputId" 
                            type="email" 
                            required 
                        />
                        <label 
                            className={styles.inputLabel}
                            htmlFor="emailInput" 
                            id='emailInputContainerLabelId' 
                        >
                            Email
                        </label>
                    </div>
                    <div 
                        className={`${styles.inputContainer} ${styles.passwordContainer}`}
                        id="passwordInputContainerId" 
                    >
                        <input 
                            className={styles.inputField} 
                            id="passwordInputId" 
                            type={passwordVisible ? "text" : "password"} 
                            required 
                        />
                        <label 
                            className={styles.inputLabel}
                            htmlFor="passwordInput" 
                            id="passwordInputContainerLabelId" 
                        >
                            Password
                        </label>
                        <img 
                            alt={passwordVisible ? "Show Password" : "Hide Password"} 
                            className={styles.eyeIcon} 
                            id="togglePasswordVisibilityImageId" 
                            onClick={togglePasswordVisibility} 
                            src={passwordVisible ? "images/Openeye.png" : "images/Closeeye.png"} 
                        />
                    </div>
                    <Button 
                        buttonText="Submit" 
                        id="submitButtonId" 
                    />
                    <Button 
                        buttonText="Continue with email" 
                        id="continueWithEmailButtonId" 
                    />

                    <p 
                     className={styles.registerPrompt}
                     id="registerPromptId" 
                    >
                        Don&apos;t have an account? 
                        <a href="SignUp.html">Register</a>
                    </p>
                </div>
                <div 
                    className={styles.loginImage}
                    id="loginImageContainerId" 
                >
                    <img 
                        alt="Login Visual" 
                        id="loginImageId" 
                        src="images/login7.webp" 
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
