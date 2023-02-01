import React from "react";
import "./callToAction.css";
import {FaCcPaypal} from 'react-icons/fa'
import { Link } from "react-router-dom";


// import sound from "./kesariya.mp3"

const CallToAction = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
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
           
           <FaCcPaypal className="payicon"/>
          <button className="modal-text" id="modalRequestLabel"  data-bs-toggle="tooltip" data-bs-placement="top" title="secure payment by Paypal">
            Pay With Paypal
          </button>
           
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
