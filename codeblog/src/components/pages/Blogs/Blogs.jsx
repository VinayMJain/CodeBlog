import React, {useState} from 'react';
// import SearchBar from '../../common/SearchBar/SearchBar';
import SearchBarMui from '../../common/SearchBar/SearchBarMui';
import styles from './Blogs.module.css';
import RankingSection from '../../specific/RankingSection/RankingSection';
import BlogSection from '../../specific/BlogSection/BlogSection';
import {CatetoryButton} from '../../common/CategoryButton/CatetoryButton';
import {SortButton} from '../../common/SortButton/SortButton';
import Stack from '@mui/material/Stack';

const UnsplashAccessKey = 'aVhwloBHIg3J6I1FchuFQt-rr1kwoHJR-lpfzPYBjnI'; // Replace with your Unsplash API access key

function Blogs() {
  console.log("Blogs.jsx rendered")
  const [selectedCategory, setSelectedCategory] = useState('all');
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
          <Stack 
            direction="row" 
            spacing={2}
            sx={{
              justifyContent: 'space-between',
              margin: '1rem',
            }}
            >
            <CatetoryButton
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
            <SortButton />
          </Stack>
        </div>
        <BlogSection
          selectedCategory={selectedCategory} 
        />
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
