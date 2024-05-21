import React from 'react';
import "../assets/style/signup.css"

const Signup = () => {
    return (
        <div className="div-body">
            <div className="logo">
                <img id="logo-image" src="images/logo1.png" alt="Logo" />
                <span>CodeBlog</span>
            </div>
            <section className="signup-section">
                <div className="signup-heading">
                    <h2>Create an account</h2>
                    <p>Lets get started!</p>
                </div>
                <form className="signup-form">
                    <div className="form-group">
                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" id="dob" name="dob" />
                        </div>
                    </div>
                    <div className="form-group" id="phone-field">
                        <div className="input-field" >
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                            <img src="images/Closeeye.png" alt="Hide Password" id="eyeClosed" />
                            <img src="images/Openeye.png" alt="Show Password" id="eyeOpen" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" required />
                            <img src="images/Closeeye.png" alt="Hide Password" id="eyeClosed-confirm" />
                            <img src="images/Openeye.png" alt="Show Password" id="eyeOpen-confirm" />
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">Sign Up</button>
                        <button type="button" className="alternative-btn">Continue with Email</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Signup;
