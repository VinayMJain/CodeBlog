import React from 'react'
import Upload from '../../specific/Upload/Upload'
import blogs from '../../../uploadBlogs.json'


function Uploads() {
  return (
    <>
    {blogs.map((blog) => (
      <Upload 
        blogs={blog.blogsList} 
        month={blog.month} 
        key={blog.id}
      />
    ))}
    </>
  )
}

export default Uploads