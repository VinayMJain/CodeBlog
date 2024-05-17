import React from 'react'
import "../assets/style/home.css"
import logo1 from "../assets/images/logo1.png"
function  Navbar() {
  return (
    <header className="home-header" id="home-header">
        <nav className="home-navbar" id="home-navbar">
            <div className="home-navbar-left">
                <a href="home.html" className="home-link">
                    <img src={logo1} alt="Code-Blog logo" />
                    <span className="CodeBlog-Name">CodeBlog</span>
                </a>
            </div>
            <div className="home-navbar-center">
                <ul className="home-nav-links">
                    <li><a href="home.html" className="home-navbar-links-li">Blogs</a></li>
                    <li><a href="" className="home-navbar-links-li">Discussions</a></li>
                    <li><a href="Upload.html" className="home-navbar-links-li">Uploads</a></li>
                    <li><a href="AboutUs.html" className="home-navbar-links-li">About</a></li>
                    <li><a href="FAQs.html" className="home-navbar-links-li">FAQs</a></li>
                    <li><a href="contact.html" className="home-navbar-links-li">Contact</a></li>
                </ul>
            </div>
            <div className="home-navbar-right">
                <div className="home-navbar-right-notification">
                    <a href="" id="notificationButton" onclick="toggleNotificationsDropdown(event)" className="notification-button">
                        <img src="images/notification.png" alt="This is img" />
                    </a>
                    {/* <div className="notifications-dropdown" id="notificationsDropdown" style="display: none; color: black;">
                        <div className="notification-item">You have 3 new messages.</div>
                        <div className="notification-item">Your post has 5 new comments.</div>
                        <div className="notification-item">You got 5 likes.</div>
                    </div> */}
                </div>

                <div className="home-navbar-right-profile">
                    
                    <img src="images/profile-photo.png" alt="profile" className="imgIcon" id="imgIcon" />
                    <div className="dropdownProfile" id="profileDrop">
                        <a href="profile.html">Profile</a>
                        <a href="index.html">Log Out</a>
                    </div>
                    
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar