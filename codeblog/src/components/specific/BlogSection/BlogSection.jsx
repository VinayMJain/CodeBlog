import React from 'react'
import styles from './BlogSection.module.css'
import Card from '../../common/Card/Card'

import blogs from '../../../Blogs.json';

// const blogs = [
//     { title: "Quick Sort", path: "images/cb-logo-3.webp" },
//     { title: "Binary Search", path: "images/cb-logo-4.webp" },
//     { title: "Merge Sort", path: "images/cb-logo-7.webp" },
//     { title: "Bucket Sort", path: "images/cb=logo-5.webp" },
//     { title: "Bucket Sort", path: "images/cb=logo-5.webp" },
//     { title: "Bucket Sort", path: "images/cb=logo-5.webp" },
//     { title: "Bucket Sort", path: "images/cb=logo-5.webp" },
//   ];

function BlogSection() {
  return (
    <div className={styles.blogContainer} id='blogContainerId'>
        {blogs.map((blog) => (
          <Card key={blog.title} title={blog.title} image={blog.path} />
        ))}
    </div>
  )
}

export default BlogSection