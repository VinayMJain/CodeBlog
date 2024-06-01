import React from 'react';
import styles from '../About/About.module.css';

function About() {
  return (
    
      <section
        className={styles.aboutusSection}
        id="aboutusSectionId"
      >
        <div
          className={styles.quote}
          id="quoteId"
        >
          <h2
            id="quoteH2_1Id"
          >
            Write, share, inspire.
          </h2>
          <h2
            id="quoteH2_2Id"
          >
            The stage for developer stories.
          </h2>
        </div>
        <div
          className={styles.totalContent}
          id="totalContentId"
        >
          <div
            className={styles.leftsideContent}
            id="leftsideContentId"
          >
            <div
              className={styles.content}
              id="contentId"
            >
              <p
                id="contentPId"
              >
                Write, share, and inspire on our streamlined blogging platform, where code meets creativity. Elevate your developer stories and fuel tech conversations, all while building your network in the community.esses. That&apos;s why we&apos;ve brought together a team of experts who are passionate about helping our clients succeed online.
              </p>
            </div>
            <div
              className={styles.socialmediaLinks}
              id="socialmediaLinksId"
            >
              <div
                className={styles.linkedin}
                id="linkedinId"
              >
                <img
                  alt="LinkedIn"
                  id="linkedinImgId"
                  src="../images/linkedin.png"
                />
              </div>
              <div
                className={styles.github}
                id="githubId"
              >
                <img
                  alt="GitHub"
                  id="githubImgId"
                  src="../images/github.png"
                />
              </div>
              <div
                className={styles.twitter}
                id="twitterId"
              >
                <img
                  alt="Twitter"
                  id="twitterImgId"
                  src="../images/logos.png"
                />
              </div>
              <div
                className={styles.insta}
                id="instaId"
              >
                <img
                  alt="Instagram"
                  id="instaImgId"
                  src="../images/instagram.png"
                />
              </div>
            </div>
          </div>
          <div
            className={styles.rightsideContent}
            id="rightsideContentId"
          >
            <img
              alt="About Us"
              id="rightsideContentImgId"
              src="../images/Screenshot 2024-04-15 220549.png"
            />
          </div>
        </div>
      </section>
    
  );
}

export default About;
