import React from 'react'
import style from  './Navbar.module.css'

function Navbar({onPageChange}) {
    const navbarItemArray = ['Blogs','Discussion','Uploads','About','FAQs','Contact']

  return (
    <header 
        className={style.navHeader} 
        id='navHeaderId'
        >
        <nav 
            className={style.navbar} 
            id='navbarId'
            >
            <div 
                className={style.navbarLogo} 
                id='navbarLogoId'
                >
                <button 
                    className={style.logoButton} 
                    id='logoButtonId'
                    >
                    <img 
                        alt="logo" 
                        id='logoId'
                        src="images/logo1.png" 
                    />
                    <span 
                        className={style.CodeBlogName}
                        id='CodeBlogNameId' 
                    >CodeBlog
                    </span>
                </button>
            </div>
            <div 
                className={style.navbarOption} 
                id='navbarOptionId'
                >
                <ul 
                    className={style.navbarList} 
                    id='navbarListId'
                    >
                    {navbarItemArray.map((item, index) => {
                        return (
                            <li 
                                className={style.navbarItem} 
                                id={`navbarItem${item}`}
                                key={index} 
                                >
                                <button 
                                    className={style.navbarLinkButton} 
                                    id={`navbarLinkButton${item}`}
                                    onClick={()=>onPageChange(item)} 
                                >{item}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div 
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
                        >
                            <img 
                                alt="Profile" 
                                id='profileLogoId'
                                src="images/profile-photo.png" 
                            />
                    </button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar