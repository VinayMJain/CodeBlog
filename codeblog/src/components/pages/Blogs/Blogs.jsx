import React from 'react';
// import SearchBar from '../../common/SearchBar/SearchBar';
import SearchBarMui from '../../common/SearchBar/SearchBarMui';
import styles from './Blogs.module.css';
import RankingSection from '../../specific/RankingSection/RankingSection';
import BlogSection from '../../specific/BlogSection/BlogSection';

function Blogs() {
  console.log("Blogs.jsx rendered")
  return (
    <div 
      className={styles.blogContainer} 
      id='blogContainerId'
    >
      <main 
        className={styles.blogContainerMain} 
        id='blogsMainDivId'
      >
        <div 
          className={styles.searchBarContainer} 
          id='searchBarParentId'
        >
          {/* <SearchBar /> */}
          <SearchBarMui />
        </div>
        <BlogSection />
      </main>

      <aside 
        className={styles.rankingAside} 
        id='rankingSectionAsideId'
      >
        <RankingSection />
      </aside>
    </div>
  );
}

export default Blogs;
