import React from 'react';
import "../assets/style/upload.css"

const Upload = () => {
    return (
        <>
            <header className="home-header" id="home-header">
                <nav className="home-navbar" id="home-navbar">
                    <div className="home-navbar-left">
                        <a href="home.html" className="home-link">
                            <img src="images/logo1.png" alt="Code-Blog logo" />
                            <span className="CodeBlog-Name">CodeBlog</span>
                        </a>
                    </div>
                    <div className="home-navbar-center">
                        <ul className="home-nav-links">
                            <li><a href="home.html">Blogs</a></li>
                            <li><a href="">Discussions</a></li>
                            <li><a href="Upload.html">Uploads</a></li>
                            <li><a href="AboutUs.html">About</a></li>
                            <li><a href="FAQs.html">FAQs</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="home-navbar-right">
                        <div className="home-navbar-right-notification">
                            <img src="images/notification.png" alt="" />
                        </div>

                        <div className="home-navbar-right-profile">
                            <a href="profile.html">
                                <img src="images/profile-photo.png" alt="profile" />
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="main-container">
                <div>
                    <div className="p-blog">
                        <p>This-Month</p>
                    </div>
                    <div className="card-index">
                        <div className="card-image">
                            <img src="images/BlogData/binary search.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Binary Search</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="images/BlogData/binarytree.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Binary Tree</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="images/BlogData/binary search.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Binary Search</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="images/BlogData/binarytree.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Binary Tree</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-blog">
                        <p>April</p>
                    </div>
                    <div className="card-index">
                        <div className="card-image">
                            <img src="images/BlogData/tries.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Tries</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="images/BlogData/binary search.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Binary Search</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="images/BlogData/binarytree.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Binary Tree</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="images/BlogData/tries.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Tries</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-blog">
                        <p>March</p>
                    </div>
                    <div className="card-index">
                        <div className="card-image">
                            <img src="images/BlogData/binary search.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Binary Search</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="images/BlogData/binarytree.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Binary Tree</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="images/BlogData/tries.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Tries</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src="images/BlogData/binarytree.png" alt="" />
                            <div className="card-topic">
                                <p className="topic-name">Binary Tree</p>

                            </div>
                            <div className="explore-btn">
                                <button>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Upload;
