import React from 'react'
import styles from './BlogSection.module.css'
const blogs = [
    { title: "Quick Sort", path: "images/cb-logo-3.webp" },
    { title: "Binary Search", path: "images/cb-logo-4.webp" },
    { title: "Merge Sort", path: "images/cb-logo-7.webp" },
    { title: "Bucket Sort", path: "images/cb=logo-5.webp" },
  ];
function BlogSection() {
  return (
    <div className={styles.blogContainer} id='blogContainerId'>
        {blogs.map((blog) => (
            <div className={styles.blogCard} id='blogCardId'>
            <img src={blog.path} alt={blog.title} className={styles.blogImage} id='blogImageId'/>
            <h3 className={styles.blogTitle} id='blogTitleId'>{blog.title}</h3>
            </div>
        ))}
    </div>
  )
}

export default BlogSection