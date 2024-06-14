import React from 'react'
import Upload from '../../specific/Upload/Upload'
import blogs from '../../../uploadBlogs.json'


function Uploads({updateNotification}) {
  console.log("Uploads.jsx rendered");
  return (
    <>
    {blogs.map((blog) => (
      <Upload updateNotification={updateNotification}
        blogs={blog.blogsList} 
        month={blog.month} 
      />
    ))}
    </>
  )
}

export default Uploads