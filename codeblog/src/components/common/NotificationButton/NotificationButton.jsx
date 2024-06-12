import React, { useEffect } from 'react'
import styles from './NotificationButton.module.css'
import { useState } from 'react';
import blogs from "../../../uploadBlogs.json"

const NotificationButton = () => {
    // Step 3: State Management
    const [notificationCount, setNotificationCount] = useState(0); // Example count, you can set it dynamically

    let myArray = []

    for (let i = 0; i < blogs.length; i++) {
        myArray.push(...blogs[i].blogsList)
        
    }
    
    useEffect(() => {
        setNotificationCount(myArray.length)
    },[blogs])

    // console.log(blogs.length)

return (
    <div className={styles.notificationContainer}>
    <button 
        className={styles.notificationButton}
        id='notificationButtonId'
    >
        <img 
        alt="Notification" 
        id='notificationLogoId'
        src="images/notification.png" 
        />
        {/* Step 4: Display Notification Count */}
        {notificationCount > 0 && (
        <span className={styles.notificationBadge}>
            {notificationCount}
        </span>
        )}
    </button>
    </div>
);
};

export default NotificationButton;
