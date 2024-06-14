import React from "react";
import styles from './SignUp.module.css';
import Button from '../../common/Button/Button';
function SignUp(){
    // const [passwordVisible, setPasswordVisible] = useState(false);

    // const togglePasswordVisibility = () => {
    //     setPasswordVisible(!passwordVisible);
    // };

    return(
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
                            for="firstName"
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
                            for="lastName"
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
                            for="email"
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
                            for="dob"
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
                            for="phone"
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
                            for="password"
                        >
                            Password
                        </label>
                        <input 
                            id="password" 
                            name="password" 
                            required
                            type="password" 
                        />
                        {/* <img 
                            alt={passwordVisible ? "Show Password" : "Hide Password"} 
                            id="togglePasswordVisibilityImage1Id"
                            onclick={togglePasswordVisibility()}
                            src={passwordVisible ? "images/Openeye.png" : "images/Closeeye.png"}
                            style="display: none; cursor: pointer;"
                        /> */}
                        {/* <img 
                            alt="Show Password" 
                            id="eyeOpen" 
                            onclick={togglePasswordVisibility1()} 
                            src="images/Openeye.png" 
                            style="cursor: pointer;"
                        /> */}
                    </div>
                    <div 
                        className={styles.inputField}
                        id="inputField7Id"
                    >
                        <label 
                            for="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            required
                            type="password" 
                        />
                        {/* <img 
                            alt={passwordVisible ? "Show Password" : "Hide Password"}
                            id="togglePasswordVisibilityImage2Id"
                            onclick={togglePasswordVisibility()}
                            src={passwordVisible ? "images/Openeye.png" : "images/Closeeye.png"}
                            style="display: none; cursor: pointer;"
                        /> */}
                        {/* <img 
                            alt="Show Password"
                            id="eyeOpen-confirm" 
                            onclick={togglePasswordVisibility1()}
                            src="images/Openeye.png" 
                            style="cursor: pointer;"
                        /> */}
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
    );
}

export default SignUp;