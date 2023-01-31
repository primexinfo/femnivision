import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./infosection.css";
import { Link } from "react-router-dom";
import { api, IMG_BASE_URL } from "./api/api";
import Aos from "aos";
import 'aos/dist/aos.css'
import Tabs from "./Tabs";

const Conteiner = styled.div`
  // padding: 3rem calc((100vh-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = ({ heading, peragraphOne, reverse, image }) => {
  const [frontBlog, setFrontBlog] = useState([]);
useEffect(()=>{
  Aos.init({duration:2000})
},[])
  useEffect(() => {
    axios
      .get(api.frontBlogs)
      .then((res) => {
        setFrontBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section data-aos="fade-up"  className="section-info welcome">
      <div className="row">
      <div className="col-md-5 pr-2">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-7">
          <h2 data-aos="fade-left"  className=" my-therapy hero-title text-center">SPECIALIZATING IN THE FOLLOWING AREAS:</h2>
            <Tabs/>
        </div>
      </div>
        

        
    </section>
  );
};

export default InfoSection;
