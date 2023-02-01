import React, { useEffect } from "react";

import "./infosection.css";
import Aos from "aos";
import image from "./image/femni.jpg";
import { BASE_URL } from './api/api';

import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section className=" section contact-section pt-2">
        <div className="col-12 text-center mb-2">
          <h2 className="hero-title contact-title">CONTACT WITH ME</h2>
        </div>
    
          <div className="row"></div>
          <div className="row">
            <div className="col-lg-5 col-md-5 order-md-last d-flex pl-3 pr-3">
              <div className="contact-wrap w-100">
                <form data-aos="fade-left">
                  <h5>Send message</h5>
                  <div className="form-group">
                    <span>Full Name</span>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <span>Email</span>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <span>Write your message</span>
                    <textarea
                      required="required"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn send-button"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex align-items-stretch contact-text">
             
                {/* <div className="dbox w-100 d-flex align-items-center">
							<div className="icon d-flex align-items-center justify-content-center contact-text-phone">
								<span data-aos="fade-right" className="fa fa-phone"></span>
							</div>
							<div className="textphone">
								<p><span>Phone:</span> <a href="tel://+447944946496">+88********</a></p>
							</div>
						</div>
						<div className="dbox w-100 d-flex align-items-center">
							<div className="icon d-flex align-items-center justify-content-center contact-text-phone">
								<span data-aos="fade-right" className="fa fa-envelope"></span>
							</div>
							<div className="textemail">
								<p><span>Email:</span> <a href="mailto:demomail@gmail.com">demomail@gmail.com</a></p>
							</div>
						</div> */}

                <img className="contact-img" src={image} alt="femnivision" />
            
            </div>
          </div>
       
      </section>
    </>
  );
}

export default Contact;
