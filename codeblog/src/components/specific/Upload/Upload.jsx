import React from "react";
import style from "./upload.module.css";
import Card from "../../common/Card/Card";


const Upload = ({ month, blogs }) => {
  return (
    <>
      <div 
        className={style.mainContainer} 
        id="mainContainerId">
        <div 
          className={style.pBlog} 
          id="pBlogId"
        >
          <h2 
            id="monthP"
          >
              {month}
          </h2>
        </div>
        <div 
          className={style.uploadBlog} 
          id="uploadBlogId">
          {blogs.map((blog) => (
            <Card 
              image={blog.path} 
              title={blog.title} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Upload;
