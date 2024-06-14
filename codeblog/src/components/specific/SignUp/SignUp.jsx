import React, { useState } from "react";
import styles from './SignUp.module.css';
import Button from '../../common/Button/Button';

function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div 
            className={styles.signupContainer}
            id="signupContainerId"
        >
        <section 
            className={styles.signupSection}
            id="signupSectionId"
        >
            <div 
                className={styles.signupHeading}
                id="signupHeadingId"
            >
                <h2 id="createAccountTextId">Create an account</h2>
                <p id="getStartedTextId">Let's get started!</p>
            </div>
            <form 
                className={styles.signUpForm}
                id="signUpFormId"
            >
                <div 
                    className={styles.formGroup}
                    id="formGroup1Id"
                >
                    <div 
                        className={styles.inputField}
                        id="inputField1Id"
                    >
                        <label 
                            htmlFor="firstName"
                        >
                            First Name
                        </label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            required
                        />
                    </div>
                    <div 
                        className={styles.inputField}
                        id="inputField2Id"
                    > 
                        <label 
                            htmlFor="lastName"
                        >
                            Last Name
                        </label>
                        <input 
                            id="lastName" 
                            name="lastName" 
                            required
                            type="text" 
                        />
                    </div>
                </div>
                <div 
                    className={styles.formGroup}
                    id="formGroup2Id"
                >
                    <div 
                        className={styles.inputField}
                        id="inputField3Id"
                    >
                        <label 
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input 
                            id="email" 
                            name="email" 
                            required
                            type="email" 
                        />
                    </div>
                    <div 
                        className={styles.inputField}
                        id="inputField4Id"
                    >
                        <label 
                            htmlFor="dob"
                        >
                            Date of Birth
                        </label>
                        <input 
                            id="dob" 
                            name="dob"
                            type="date" 
                        />
                    </div>
                </div>
                <div 
                    className={styles.formGroup}
                    id="formGroup3Id"
                >
                    <div 
                        className={styles.inputField}
                        id="inputField5Id"
                    >
                        <label 
                            htmlFor="phone"
                        >
                            Phone
                        </label>
                        <input 
                            id="phone" 
                            name="phone" 
                            required
                            type="tel" 
                        />
                    </div>
                </div>
                <div 
                    className={styles.formGroup}
                    id="formGroup4Id"
                >
                    <div 
                        className={styles.inputField}
                        id="inputField6Id"
                    >
                        <label 
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input 
                            id="password" 
                            name="password" 
                            required
                            type={passwordVisible ? "text" : "password"} 
                        />
                        <img 
                            id="togglePasswordVisibilityImageId" 
                            src={passwordVisible ? "/images/Openeye.png" : "/images/Closeeye.png"} 
                            alt={passwordVisible ? "Hide Password" : "Show Password"} 
                            onClick={togglePasswordVisibility} 
                            className={styles.eyeIcon} 
                        />
                    </div>
                    <div 
                        className={styles.inputField}
                        id="inputField7Id"
                    >
                        <label 
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            required
                            type={confirmPasswordVisible ? "text" : "password"} 
                        />
                        <img 
                            id="toggleConfirmPasswordVisibilityImageId" 
                            src={confirmPasswordVisible ? "/images/Openeye.png" : "/images/Closeeye.png"} 
                            alt={confirmPasswordVisible ? "Hide Password" : "Show Password"} 
                            onClick={toggleConfirmPasswordVisibility} 
                            className={styles.eyeIcon} 
                        />
                    </div>
                </div>
                <div 
                    className={styles.formActions}
                    id="formActionsId"
                >
                    <Button id="submitButtonId" buttonText="Sign Up" />
                    <Button id="continueWithEmailButtonId" buttonText="Continue with email" />
                </div>
            </form>
        </section>
        </div>
    );
}

export default SignUp;