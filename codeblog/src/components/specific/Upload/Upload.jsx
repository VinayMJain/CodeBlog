import React, { useState, useEffect } from "react";
import style from "./upload.module.css";
import Card from "../../common/Card/Card";

const Upload = ({ month, blogs, monthIndex, handleDelete }) => {
    const [myBlog, setMyBlog] = useState(blogs);

    useEffect(() => {
        setMyBlog(blogs);
    }, [blogs]);

    const localHandleDelete = (id) => {
        const newArray = myBlog.filter(blog => blog.id !== id);
        setMyBlog(newArray);
        handleDelete(monthIndex, id);
    };

    return (
        <div 
         className={style.mainContainer} 
         id="mainContainerId"
        >
            <div 
             className={style.pBlog} 
             id="pBlogId"
            >
                <h2 id="monthP">{month}</h2>
            </div>
            <div 
             className={style.uploadBlog} 
             id="uploadBlogId"
            >
                {myBlog.map((blog) => (
                    <Card
                        image={blog.path}
                        key={blog.id}
                        onDelete={() => localHandleDelete(blog.id)}
                        showDeleteButton={true}
                        title={blog.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Upload;
