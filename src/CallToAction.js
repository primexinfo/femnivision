import React from "react";
import "./callToAction.css";
import {FaCcPaypal} from 'react-icons/fa'
import { Link } from "react-router-dom";


// import sound from "./kesariya.mp3"

const CallToAction = () => {
  return (
    <div className=" section row justify-content-center">
      <div className="col-mb-5">
        <div className="modal-head ">
          <button className="modal-text" id="modalRequestLabel">
           FREE DISCOVERY CALL
          </button>
          {/* <audio
            src="./song/kesariya.mp3"
            type="audio/mpeg"
            controls
            autoPlay
          /> */}<Link  to={"/appointment"}>
          <button className="modal-text" id="modalRequestLabel">
             Make an Appointment
           
          </button>
    </Link>
          <div className="paysection">
           
          <a href="https://paypal.me/null?country.x=US&locale.x=en_US">
          <button className="modal-text" id="modalRequestLabel"  data-bs-toggle="tooltip" data-bs-placement="top" title="secure payment by Paypal">
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
