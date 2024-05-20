import React from 'react'
import "../assets/style/login.css"

function Login() {
  return (
    <div id="login-container">
    <div id="login-form">
        <div className="form-header">
            <div className="logo">
                <a href="index.html">
                    <img src="images/logo1.png" alt="CodeBlog Logo" />
                    <h1>CodeBlog</h1>
                </a>
            </div>
            <h2>Welcome to CodeBlog</h2>
            <p>Lets get started!</p>
        </div>
        <div className="input-container">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label >
        </div>
        <div className="input-container password-container">
            <input type="password" id="password" required />
            <label htmlFor="password">Password</label>
            <img src="images/Closeeye.png" alt="Hide Password" id="eyeClosed"  />
            <img src="images/Openeye.png" alt="Show Password" id="eyeOpen" />
        </div>
        <button type="submit" className="signin-btn"><a href="home.html">Sign in</a></button>
        <button type="button" className="email-btn"><a href="home.html">Continue with email</a></button>
        <p className="register-prompt">Don&apos;t have an account? <a href="SignUp.html">Register</a></p>
    </div>
    <div  className="login-image">
        <img src="images/login7.webp" alt="Login Visual" />
    </div>
</div>

  )
}

export default Login
