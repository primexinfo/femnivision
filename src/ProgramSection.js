

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_BASE_URL} from './api/api'
import { Link } from "react-router-dom";
import axios from "axios";
import "./programsection.css";
import ScrollToTop from "./ScrollToTop";
import './accordion.css'

const ProgramSection = () => {
  const { id } = useParams();

  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios.get(`https://www.admin.sadiatherapy.com/api/programm/${id}`).then((res) => {
      
   
        setProgram(res.data);
        
    });
  }, []);
 
  console.log(program);
  return (
    <>
     <ScrollToTop />{" "} <h2 className="pt-5 mb-5 text-center servicestext"> THE SERVICES WE OFFER</h2>
      <div className="section anim faq-section ">
        <div >
         
         
        </div>
        <div className="descSection" >
         <h3 className="mx-5">
              <b>What is Hypnosis?</b>
            </h3>{" "}
            <img className=" mx-5 faqimg float-start" src="https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <p className="mx-5  ">
            
            The public perception of hypnosis is one that is concerned with
            stage shows and mysticism—think Derren Brown, for instance. In the
            past, recipients of hypnosis have claimed that they felt various
            changes in their behaviour, thoughts, feelings, and time perception;
            they might have even hallucinated. While this all may be
            entertaining to watch, performance hypnosis is nothing like
            therapeutic hypnosis. In fact, hypnosis is not at all mystical when
            you strip away the fantastical elements of a magic show. Its effects
            are oftentimes exaggerated and can seem frightening to people, but
            it is important to remember that hypnosis has never hurt anyone. It
            is not mind-control and you cannot get stuck in it. It is a
            medically approved <sup>1</sup>  , legitimate therapy, and has
            scientifically-backed health benefits.
            <br /> <br />
            The term hypnosis comes from the Greek word ‘hypnos,’ meaning sleep.
            However, while sleep is a state of unconsciousness, hypnosis allows
            you to control and focus your subconsciousness. Unlike many other
            therapies, 
            {/* it contrives situations in which people respond to
            imaginative suggestions <sup>2</sup>  and can be doubly effective because of
            this. Hypnosis is a very powerful tool  */}
            {/* that can be used to boost the
            effects of psychotherapy and can be used as complementary and/or an
            alternative to medicinal treatment.
            <br />
            <br />
            <sup>1</sup>The American Medical Association approved hypnosis as a
            therapy in 1958.
            <br />
            <br />
            <sup>2</sup>From the Oxford Handbook of Hypnosis, chapter 5.{" "} */}
          </p>
         
          
       
          
          <h3 className="mx-5">
            <b >what is Conscious and subconscious mind?</b>
          </h3>{" "}
          <img className="mx-5 faqimg float-end " src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
          <p className="mx-5">
            The Conscious Mind is where we spend most of our time, but it is
            actually the weakest part of our mind. It is the rational,
            analytical part of the mind. It controls our thinking, judging, and
            decision-making, and functions on the idea that humans must have a
            reason for everything. There are four parts to the Conscious Mind –
            rational, analytical, willpower, and temporary memory. The
            Subconscious Mind is the most powerful part of our mind. This is the
            part of our mind that we need to access to help us achieve our
            goals. The Subconscious Mind is the part of the mind that
            hypnotherapists work on with hypnosis; this is where our imagination
            is stored. Imagination, permanent memory, habits, feelings and
            emotions, beliefs, and Autonomic Nervous System all are parts of the
            subconscious mind.
          </p>{" "}
         
        </div>
      </div>
    </>
  );
};

export default ProgramSection;
