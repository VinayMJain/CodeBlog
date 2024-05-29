import React from 'react'
import style from  './Navbar.module.css'

function Navbar() {
    const navbarItemArray = ['Blogs','Discussion','Uploads','About','FAQs','Contact']

  return (
    <header className={style.navHeader} id='navHeader'>
        <nav className={style.navbar} id='navbar'>
            <div className={style.navbarLogo} id='navbarLogo'>
                <button className={style.logoButton} id='logoButton'>
                    <img src="#" alt="logo" id='logo'/>
                    <span id='CodeBlogName'>CodeBlog</span>
                </button>
            </div>
            <div className={style.navbarOption} id='navbarOption'>
                <ul className={style.navbarList} id='navbarList'>
                    {navbarItemArray.map((item, index) => {
                        return (
                            <li key={index} className={style.navbarItem} id={`navbarItem${item}`}>
                                <button className={style.navbarLink} id={`navbarLink${item}`}>{item}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={style.navbarRight} id='navbarRight'>
                <button className={style.notificationButton}><img src="#" alt="Notification" id='notificationLogo'/></button>
                <div className={style.navbarProfile} id='navbarProfile'>
                    <button className={style.profileButton} id='profileButton'><img src="#" alt="Profile" id='profileLogo'/></button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar