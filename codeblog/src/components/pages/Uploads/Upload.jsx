import React from "react";
import style from "./upload.module.css";
import Card from "../../common/Card/Card";

const blogs = [
  { title: "Quick Sort", path: "images/cb-logo-3.webp" },
  { title: "Binary Search", path: "images/cb-logo-4.webp" },
  { title: "Merge Sort", path: "images/cb-logo-7.webp" },
  { title: "Bucket Sort", path: "images/cb=logo-5.webp" },
];

const Upload = ({ month }) => {
  return (
    <>
      <div className={style.mainCantainer} id="mainCantainer">
        <div className={style.pBlog} id="pBlog">
          <p id="monthP">{month}</p>
        </div>
        <div className={style.uploadBlog} id="uploadBlog">
          {blogs.map((blog) => (
            <Card title={blog.title} image={blog.path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Upload;
