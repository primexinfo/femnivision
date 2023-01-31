import React from "react";
import image from "../src/image/diane.jpg";

import "./about.css";
function About(props) {
  return (
    <div className="container anim">
      <div className="title">
        <h1 className="hero-title">About Me</h1>
      </div>
      <div className="content row">
        <div className="imagecolum col-md-6 col-sm-12">
          <img className="shadow anim mb-3 img-fluid" src={image} alt="" />
        
        </div>
        <div className="col-md-6 col-sm-12">
          <p className="text-justify">
            <strong>
              {" "}
              Certified HYPNOTHERAPIST, RTT®  PRACTITIONER AND PROFESSIONAL COACH
Diane is a solution-focused hypnotherapist and coach with Rapid Transformation therapy and EFT skills to uncover the root causes of limiting beliefs that cause specific issues concerns.  She uses a 3 step Joy Acceleration Program that removes old looping thoughts and replaces them with positive transformational thoughts.

            </strong>
            <br />
            <br />
            <strong>ABOUT EFT</strong> <br />
            
Emotional Freedom Technique also known as tapping is a powerful stress relief technique base on the combined principles of accupressure and psychology.

            <br />
            <br />
            <strong>ABOUT RTT</strong> <br />
            
Rapid Transformational Therapy helps the client understand where the issue they have originated by finding root causes of the issue.

            <br />
            <br/>
            <strong>ABOUT HYPNOTHERAPY</strong> <br />
            
The practice of using the power of suggestion to bring about positive change in clients who are under deep relaxation.  This state of awareness that is different from the ordinary state of consciousness.

            <br />
            <br/>
            <strong> I’m a strong believer that you can only change what you understand.
The secret to completely healing your body and mind is to uncover the reason for the wrong beliefs that you have acquired in the past.  I will help you uncover and change those belief so they will never affect you again.
</strong>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
