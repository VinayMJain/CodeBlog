import React, { useState } from "react";
import styles from './SignUp.module.css';
import Button from '../../common/Button/Button';

function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });

        console.log(userDetails);
        
    };

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
                            id="firstNameLabelId"
                        >
                            First Name
                        </label>
                        <input 
                            id="firstName" 
                            name="firstName" 
                            onChange={onChangeHandler}
                            required
                            type="text"

                        />
                    </div>
                    <div 
                        className={styles.inputField}
                        id="inputField2Id"
                    > 
                        <label 
                            htmlFor="lastName"
                            id="lastNameLabelId"
                        >
                            Last Name
                        </label>
                        <input 
                            id="lastName" 
                            name="lastName" 
                            onChange={onChangeHandler}
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
                            id="emailLabelId"
                        >
                            Email
                        </label>
                        <input 
                            id="email" 
                            name="email" 
                            onChange={onChangeHandler}
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
                            id="dobLabelId"
                        >
                            Date of Birth
                        </label>
                        <input 
                            id="dob" 
                            name="dob"
                            onChange={onChangeHandler}
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
                            id="phoneLabelId"
                        >
                            Phone
                        </label>
                        <input 
                            id="phone" 
                            name="phone"
                            onChange={onChangeHandler} 
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
                            id="passwordLabelId"
                        >
                            Password
                        </label>
                        <input 
                            id="password" 
                            name="password" 
                            onChange={onChangeHandler}
                            required
                            type={passwordVisible ? "text" : "password"} 
                        />
                        <img 
                            alt={passwordVisible ? "Hide Password" : "Show Password"} 
                            className={styles.eyeIcon} 
                            id="togglePasswordVisibilityImageId" 
                            onClick={togglePasswordVisibility} 
                            src={passwordVisible ? "/images/Openeye.png" : "/images/Closeeye.png"} 
                        />
                    </div>
                    <div 
                        className={styles.inputField}
                        id="inputField7Id"
                    >
                        <label 
                            htmlFor="confirmPassword"
                            id="confirmPasswordLabelId"
                        >
                            Confirm Password
                        </label>
                        <input 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            onChange={onChangeHandler}
                            required
                            type={confirmPasswordVisible ? "text" : "password"} 
                        />
                        <img 
                            alt={confirmPasswordVisible ? "Hide Password" : "Show Password"} 
                            className={styles.eyeIcon} 
                            id="toggleConfirmPasswordVisibilityImageId" 
                            onClick={toggleConfirmPasswordVisibility} 
                            src={confirmPasswordVisible ? "/images/Openeye.png" : "/images/Closeeye.png"} 
                        />
                    </div>
                </div>
                <div 
                    className={styles.formActions}
                    id="formActionsId"
                >
                    <Button 
                     buttonText="Sign Up"
                     id="submitButtonId" 
                    />
                    <Button 
                     buttonText="Continue with email" 
                     id="continueWithEmailButtonId" 
                    />
                </div>
            </form>
        </section>
        </div>
    );
}

export default SignUp;