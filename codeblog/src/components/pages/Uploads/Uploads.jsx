import React from 'react'
import Upload from '../../specific/Upload/Upload'

function Uploads({ blogs, handleDelete }) {
    console.log("Uploads.jsx rendered");
    return (
        <>
            {blogs.map((blog, index) => (
                <Upload
                    key={blog.month}
                    blogs={blog.blogsList}
                    month={blog.month}
                    monthIndex={index}
                    handleDelete={handleDelete}
                />
            ))}
        </>
    )
}

export default Uploads;
