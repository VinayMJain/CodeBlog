import React from 'react'
import SearchBar from '../../common/SearchBar/SearchBar'
import styles from './Blogs.module.css'
import RankingSection from '../../specific/RankingSection/RankingSection'
import BlogSection from '../../specific/BlogSection/BlogSection'
function Blogs() {
  return (
    <div className={styles.blogContainer}>

        <main className={styles.blogContainerMain} id='blogsMainDivId'>
          <div className={styles.searchBarContainer} id="searchBarParentId">
            <SearchBar />
          </div>
          <BlogSection />
        </main>

        <aside className={styles.rankingAside} id='rankingSectionAsideId'>
        {/* <h1>This is ranking section</h1> */}
        <RankingSection />
        
        </aside>
    </div>
  )
}

export default Blogs