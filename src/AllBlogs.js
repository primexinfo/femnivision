import React,{useEffect, useState} from "react";
import BlogsCard from "./BlogsCard";
import axios from 'axios'
import { api, IMG_BASE_URL } from "./api/api";
import './allblogs.css'

function AllBlogs() {
  const [program, setAllProgram] = useState([]);

  useEffect(() => {
    axios
      .get(api.allBlog)
      .then((res) => {
        setAllProgram(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>  <div className="my-5">
          <h2 className="pt-5 text-center service-text-h"> KNOW MORE ABOUT THE THERAPY </h2>
        </div>
      <div className="container">
      
        <div className="container-fluid mb-5">
          <div className="row">
                {program.map((val, ind) => {
                  return <BlogsCard key={ind} imgsrc={`${IMG_BASE_URL}/blogs/${val.photo}`} title={val.title} details={val.description} id={`/blog/${val.id}`} />;
              
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBlogs;
