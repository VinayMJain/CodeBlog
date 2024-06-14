import React,{useState} from "react";
import style from "./upload.module.css";
import Card from "../../common/Card/Card";


const Upload = ({ month, blogs }) => {
  
  const [myBlog, setMyBlog] = useState(blogs)
  
  const handleDelete = (id) => {
    const newArray = myBlog.filter(blog => blog.id !== id);
    setMyBlog(newArray);
    };

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
          {myBlog.map((blog) => (
            <Card 
              image={blog.path} 
              title={blog.title}
              key={blog.id} 
              onDelete={() => handleDelete(blog.id)} 
              showDeleteButton={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Upload;
