

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_BASE_URL} from './api/api'
import { Link } from "react-router-dom";
import axios from "axios";
import "./programsection.css";
import ScrollToTop from "./ScrollToTop";
import './accordion.css'
import CallToAction from "./CallToAction";

const ProgramSection = () => {

  const { id } = useParams();

  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios.get(`https://www.admin.femnivision.com/api/programm/${id}`).then((res) => {
      
   
        setProgram(res.data);
        
    });
  }, []);
 
  console.log(program);
  return (
    <>
     <ScrollToTop />{" "} <h2 className="pt-5 mb-5 text-center servicestext"> THE SERVICES WE OFFER</h2>
      <section className="mx-2 pb-5 ">
        <div className="descSection row" >
         <h3 className="mx-5 pt-5">
              <b className="">{program.title}</b>
            </h3>{" "}
            <div className="col-12">
               <img className=" mx-5 faqimg float-start" src={`${IMG_BASE_URL}/services/${program.photo}`} alt="service image" />
            <p className="mx-5 p-2" dangerouslySetInnerHTML={{ __html: program.description }} >
          </p>
         
            </div>
           
          
       
          <div className="col-12">
              <img className="mx-5 faqimg float-end " src={`${IMG_BASE_URL}/image2/${program.image2}`} alt="Service image" />
          <p className="mx-5 p-2" dangerouslySetInnerHTML={{ __html: program.details }}>
       
          </p>{" "}
         
          </div>
       
        
        </div>
          
        <CallToAction/>
      </section>
      
    </>
  );
};

export default ProgramSection;
