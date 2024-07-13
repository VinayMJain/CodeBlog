import React from 'react'
import UploadSection from '../../specific/Upload/UploadSection'

function Uploads({ blogs, handleDelete }) {
    console.log("Uploads.jsx rendered");
    return (
        <>
            {blogs.map((blog, index) => (
                <UploadSection
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
