import React from 'react'
import Upload from '../../specific/Upload/Upload'
import blogs from '../../../blogs.json'


function Uploads() {
  return (
    <>
  {blogs.map((blog) => (
    <Upload month={blog.month} blogs={blog.blogsList} />
  ))}
    </>
  )
}

export default Uploads