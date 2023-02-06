import React, { useEffect, useState } from "react";
import axios from "axios";
import "./infosection.css";
import Aos from "aos";
import image from "./image/femni.jpg";
import { BASE_URL } from './api/api';
import './contact.css'

import "aos/dist/aos.css";
function Contact() {

  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [message , setMessage] = useState("")

  function saveContact(e) {
    
    e.preventDefault();
    let data = { contactName, email , message};
    axios.post(`${BASE_URL}/set-contact`, data)
      .then( (res) => 
        alert("your message successfully sent")
       
      ).then(
        setContactName(""),
        setEmail(""),
        setMessage("")
      )
      
      .catch(error => {
        console.log("ERROR:: ",error.response.data);
      });
  }
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section className=" section contact-section pt-2">
        <div className="col-12 text-center mb-2">
          <h2 className="hero-title contact-title">CONTACT WITH ME</h2>
        </div>
    
          
          <div className="row">
            <div className="col-lg-5 col-md-5 order-md-last d-flex pl-3 pr-3">
              <div className="pl-2 pr-2 contact-wrap w-100">
                <form onSubmit={saveContact} data-aos="fade-left">
                  <h4 className="msgtext"><strong>Send message</strong> </h4>
                  <div className="form-group">
                    <span>Full Name</span>
                    <input
                    onChange={(e) => {
                      setContactName(e.target.value, e.preventDefault());
                    }}
                      type="text"
                      className="form-control"
                      name="contactName"
                      value={contactName}
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <span>Email</span>
                    <input
                    onChange={(e)=>{
                      setEmail(e.target.value, e.preventDefault())
                    }}
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <span>Write your message</span>
                    <textarea
                      onChange={(e)=>{
                        setMessage(e.target.value, e.preventDefault())
                      }}
                      type="text"
                      name="message"
                      value={message}
                      required="required"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group">
                  <button type="submit"className="send-button">
                    Send Message
                  </button>
                   
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex align-items-stretch contact-text">
             
               

                <img className="contact-img" src={image} alt="femnivision" />
            
            </div>
          </div>
       
      </section>
    </>
  );
}

export default Contact;
