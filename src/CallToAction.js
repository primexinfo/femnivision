import React from "react";
import "./callToAction.css";
import {FaCcPaypal} from 'react-icons/fa'
import { Link } from "react-router-dom";
import {FaRegCalendarAlt} from "react-icons/fa"
import {MdPhonelinkRing} from "react-icons/md"


// import sound from "./kesariya.mp3"

const CallToAction = () => {
  return (
    <div className="  row justify-content-center">
      <div className="col-mb-5">
        <div className="modal-head ">
        <Link  to={"/appointment"}>
          <button className="modal-text" >
          <MdPhonelinkRing className="payicon"/>
           FREE DISCOVERY CALL 
          </button>
          </Link>
          
          {/* <audio
            src="./song/kesariya.mp3"
            type="audio/mpeg"
            controls
            autoPlay
          /> */}
          <div className="paysection">
          <Link  to={"/appointment"}>
          <button className="modal-text">
          <FaRegCalendarAlt className="payicon"/>
             Make an Appointment 
           
          </button>
    </Link></div>
          
          <div className="paysection">
           
          <a href="https://www.paypal.com/paypalme/femnivision" target="_blank" rel="noopener noreferrer">
          <button className="modal-text" >
          <FaCcPaypal className="payicon"/>
          Paypal Me 
          </button>
           </a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
