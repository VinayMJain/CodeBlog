import React from 'react'
import styles from './MainHeader.module.css'
import NotificationButton from '../NotificationButton/NotificationButton'

function MainHeader() {
    console.log('MainHeader rendered')
  return (
    <div className={styles.mainHeader} id="mainHeader">
        <button 
            className={styles.logoButton} 
            id='logoButtonId'
            onClick={()=>onPageChange('Blogs')}
        >
                <img 
                    alt="logo" 
                    id='logoId'
                    src="images/logo1.png" 
                />
                <span 
                    className={styles.CodeBlogName}
                    id='CodeBlogNameId' 
                >
                    CodeBlog
                </span>
        </button>

        <div className={styles.profileSection} id="profileSectionId">
        {/* <button 
                    className={styles.notificationButton}
                    id='notificationButtonId'
                >
                    <img 
                        alt="Notification" 
                        id='notificationLogoId'
                        src="images/notification.png" 
                    />
                </button> */}
                <NotificationButton
                />
                <div 
                    className={styles.navbarProfile} 
                    id='navbarProfileId'
                    >
                    <button 
                        className={styles.profileButton} 
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
        </div>

    </div>
  )
}

export default MainHeader