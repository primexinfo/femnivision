import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import Accordion from "./Accordion";

function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <footer  className="footer">
        <div className="footerContainer">
          <div className="footerRow">
            <div  className="footer-col">
            
              <ul>
                <li>
                  <Link to={"/terms"} preventScrollReset={true}><a href="">T&C policy</a></Link>
                  
                </li>
                {/* <li>
                  <a href="">services</a>
                </li> */}
                <li>
                 
                  <Link to={"/privacy"} preventScrollReset={true}> <a href="">Privacy Policy</a></Link>
                </li>
             
                <li>
                  <Link to={"/faq"}preventScrollReset={true}>
                    <a href="">FAQ</a>{" "}
                  </Link>
                </li>
                {/* <li>
                  <Link to={""}>
                    <a href="">programs</a>{" "}
                  </Link>
                </li> */}
                <li>
                  <Link to={"/contact"}preventScrollReset={true}>
                    <a href="">Contact</a>{" "}
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div data-aos="fade-up" className="footer-col footer-follow">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
           
                <a href="">
                  <FaLinkedin />
                </a>
              </div>
            </div> */}
           
          </div>
          <h5 className="reserved">© all rights reserved by Diane Baxter-femnivision.com 2023</h5>
           <h5 className="rights">Design & Developed by  <a href="https://primex-bd.com/#home">Primex  Information Systems Limited</a></h5>
        </div>
      </footer>
    </>
  );
}

export default Footer;
