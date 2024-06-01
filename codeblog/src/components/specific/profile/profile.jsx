import React from 'react';
import style from './profile.module.css';

function Profile() {
  return (
    <section 
      className={style.profileSection} 
      id='profileSectionId'
    >
      <div 
        className={style.nameEdit} 
        id='nameEditId'
      >
        <h1 
          id='nameEditH1Id'
        >
          Your Profile
        </h1>
        <button 
          id='nameEditButtonId'
        >
          <img 
            src="images/pencil.png" 
            id='nameEditImgId' 
            alt='Edit Profile' 
          />
        </button>
      </div>
      <div 
        className={style.profileDetails} 
        id='profileDetailsId'
      >
        <div 
          className={style.profileImage} 
          id='profileImageId'
        >
          <img 
            src="images/profile-photo.png" 
            id='profileImageImgId' 
            alt="Profile Here" 
          />
        </div>
        <div 
          className={style.profileText} 
          id='profileTextId'
        >
          <h1 
            id='profileTextNameId'
          >
            Jane Doe
          </h1>
          <h3 
            id='profileTextEmailId'
          >
            janedoe@gamil.com
          </h3>
          <h3 
            id='profileTextPhoneId'
          >
            9876543210
          </h3>
        </div>
      </div>
      <div 
        className={style.profileSocial} 
        id='profileSocialId'
      >
        <div 
          className={style.profileLinks} 
          id='profileLinksId'
        >
          <div 
            className={style.linkedin} 
            id='linkedinId'
          >
            <img 
              src="images/linkedin.png" 
              id='linkedinImgId' 
              alt='LinkedIn' 
            />
          </div>
          <div 
            className={style.github} 
            id='githubId'
          >
            <img 
              src="images/github.png"  
              id='githubImgId' 
              alt='GitHub' 
            />
          </div>
          <div 
            className={style.twitter} 
            id='twitterId'
          >
            <img 
              src="images/logos.png" 
              id='twitterImgId' 
              alt='Twitter' 
            />
          </div>
          <div 
            className={style.insta} 
            id='instaId'
          >
            <img 
              src="images/instagram.png" 
              id='instaImgId' 
              alt='Instagram' 
            />
          </div>
        </div>
        <div 
          className={style.profileButton} 
          id='profileButtonId'
        >
          <div 
            className={style.like} 
            id='likeId'
          >
            Likes: 250
          </div>
          <div 
            className={style.rank} 
            id='rankId'
          >
            Rank: 120
          </div>
        </div> 
      </div>
    </section>
  );
}

export default Profile;
