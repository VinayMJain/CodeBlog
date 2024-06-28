import React from 'react'
import Upload from '../../specific/Upload/Upload'

function Uploads({ blogs, handleDelete }) {
    console.log("Uploads.jsx rendered");
    return (
        <>
            {blogs.map((blog, index) => (
                <Upload
                    blogs={blog.blogsList}
                    handleDelete={handleDelete}
                    key={blog.month}
                    month={blog.month}
                    monthIndex={index}
                />
            ))}
        </>
    )
}

export default Uploads;
