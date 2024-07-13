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
            alt='Edit Profile' 
            id='nameEditImgId' 
            src="images/pencil.png" 
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
            alt="Profile Here" 
            id='profileImageImgId' 
            src="images/profile-photo.png" 
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
              alt='LinkedIn' 
              id='linkedinImgId' 
              src="images/linkedin.png" 
            />
          </div>
          <div 
            className={style.github} 
            id='githubId'
          >
            <img 
              alt='GitHub' 
              id='githubImgId' 
              src="images/github.png"  
            />
          </div>
          <div 
            className={style.twitter} 
            id='twitterId'
          >
            <img 
              alt='Twitter' 
              id='twitterImgId' 
              src="images/logos.png" 
            />
          </div>
          <div 
            className={style.insta} 
            id='instaId'
          >
            <img 
              alt='Instagram' 
              id='instaImgId' 
              src="images/instagram.png" 
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
