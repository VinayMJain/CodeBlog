import React from 'react'
import style from  './Navbar.module.css'

function Navbar({onPageChange}) {
    const navbarObjectArray = [
        {"id": 1, "title": "Blogs"},
        {"id": 2, "title": "Uploads"},
        {"id": 3, "title": "About"},
        {"id": 4, "title": "FAQs"},
        {"id": 5, "title": "Contact"}
    ]

    console.log('Navbar rendered')
    
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
                                <button 
                                    className={style.navbarLinkButton} 
                                    id={`navbarLinkButton${item.id}`}
                                    onClick={()=>onPageChange(item.title)} 
                                >{item.title}
                                </button>
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