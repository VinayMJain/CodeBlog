import React from 'react'
import style from './profile.module.css'

function profile() {
  return (
    <section className={style.profileSection} id='profileSection'>
        <div className={style.nameEdit} id='nameEdit'>
            <h1 id='nameEditH1'>Your Profile</h1>
            <button id='nameEditButton'><img src="images/pencil.png" id='nameEditImg' /></button>
        </div>
        <div className={style.profileDetails} id='profileDetails'>
            <div className={style.profileImage} id='profileImage'><img src="images/profile-photo.png" alt="profile-here" id='profileImageImg' /></div>
            <div className={style.profileText} id='profileText'>
                <h1 id='profileTextName'>Jane Doe</h1>
                <h3 id='profileTextEmail'>janedoe@gamil.com</h3>
                <h3 id='profileTextPhone'>9876543210</h3>
            </div>
        </div>
        <div className={style.profileSocial} id='profileSocial'>
            <div className={style.profileLinks} id='profileLinks'>
                <div className={style.linkedin} id='linkedin'><img src="images/linkedin.png" id='linkedinImg'/></div>
                <div className={style.github} id='github'><img src="images/github.png"  id='githubImg'/></div>
                <div className={style.twitter} id='twitter'><img src="images/logos.png" id='twitterImg'/></div>
                <div className={style.insta} id='insta'><img src="images/instagram.png" id='instaImg'/></div>
            </div>
            <div className={style.profileButton} id='profileButton'>
                <div className={style.like} id='like'>Likes: 250</div>
                <div className={style.rank} id='rank'>Rank: 120</div>
            </div> 
        </div>
    </section>
    )
}

export default profile