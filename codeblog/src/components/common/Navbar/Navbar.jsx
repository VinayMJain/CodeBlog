import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar({ onPageChange }) {
    let [currentPage, setCurrentPage] = useState('Blogs');
    const navbarObjectArray = [
        { id: 1, title: 'Blogs' },
        { id: 2, title: 'Uploads' },
        { id: 3, title: 'About' },
        { id: 4, title: 'FAQs' },
        { id: 5, title: 'Contact' },
        { id: 6, title: 'signin' },
        { id: 7, title: 'signup' }
    ]

    console.log('Navbar rendered');

    useEffect(() => {
        // Remove the background color from all navbar items
        navbarObjectArray.forEach(item => {
            const element = document.getElementById(`navbarItem${item.id}`);
            if (element) {
                element.style.backgroundColor = ''; // Reset background color
            }
        });

        // Add background color to the selected navbar item
        const selectedElement = document.getElementById(`navbarItem${navbarObjectArray.find(item => item.title === currentPage).id}`);
        if (selectedElement) {
            selectedElement.style.backgroundColor = '#5999B1'; // Your desired color
        }

        console.log("Current page is: ", currentPage);
    }, [currentPage, navbarObjectArray])

    return (
        <header
            className={style.navHeader}
            id='navHeaderId'
        >
            <nav
                className={style.navbar}
                id='navbarId'
            >
                {/* <div 
                    className={style.navbarLogo} 
                    id='navbarLogoId'
                    >
                    <button 
                        className={style.logoButton} 
                        id='logoButtonId'
                        onClick={()=>onPageChange('Blogs')}
                    >
                        <img 
                            alt="logo" 
                            id='logoId'
                            src="images/logo1.png" 
                        />
                        <span 
                            className={style.CodeBlogName}
                            id='CodeBlogNameId' 
                        >
                            CodeBlog
                        </span>
                    </button>
                </div> */}
                <div
                    className={style.navbarOption}
                    id='navbarOptionId'
                >
                    <ul
                        className={style.navbarList}
                        id='navbarListId'
                    >
                        {navbarObjectArray.map((item) => {
                            return (
                                <li
                                    className={style.navbarItem}
                                    id={`navbarItem${item.id}`}
                                    key={item.id}
                                >
                                    <Link
                                        className={style.navbarLinkButton}
                                        id={`navbarLinkButton${item.id}`}
                                        // onClick={()=>onPageChange(item.title)} 
                                        onClick={() => { setCurrentPage(item.title) }}

                                        to={`/${item.title}`}
                                    >{item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* <div 
                    className={style.navbarRight} 
                    id='navbarRightId'
                >
                    <button 
                        className={style.notificationButton}
                        id='notificationButtonId'
                    >
                        <img 
                            alt="Notification" 
                            id='notificationLogoId'
                            src="images/notification.png" 
                        />
                    </button>
                    <div 
                        className={style.navbarProfile} 
                        id='navbarProfileId'
                        >
                        <button 
                            className={style.profileButton} 
                            id='profileButtonId'
                            onClick={()=>onPageChange('Profile')}
                        >
                                <img 
                                    alt="Profile" 
                                    id='profileLogoId'
                                    src="images/profile-photo.png" 
                                />
                        </button>
                    </div>
                </div> */}
            </nav>
        </header>
    )
}

export default Navbar
