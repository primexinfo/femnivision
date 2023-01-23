import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import './stepper.css'
const Stepper = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div class="wrapper">
  <ol class="c-stepper">
  <li class="c-stepper__item"><h1 data-aos="fade-right"   class="c-stepper__title"> Step 1</h1>
        <div  data-aos="fade-left" class="c-stepper__content">
            
            <h2 class='c-stepper__package-name'>Free No-Obligation 20-minute Discovery Call</h2>
            <p class='c-stepper__package-desc'>To establish if we are the right fit for each other.  I offer a free 20-minute video conversation over Zoom.  I will use this time to find out more about you and ask questions to see if I can help you with your issue.  If it isn’t a good fit, I will let you know and point you in the right direction.  Once we have established that we will work together, I will send you a Client Intake Form and my Terms and Conditions, which you will need to sign and return with your payment before scheduling a session with me.
</p>
        </div>
    </li>
    <li class="c-stepper__item"><h1 data-aos="fade-right"   class="c-stepper__title">Step 2</h1>
        <div data-aos="fade-left" class="c-stepper__content">
            
            <h2 class='c-stepper__package-name'>Hypnotherapy Session </h2>
            <p class='c-stepper__package-desc'>The session will be over the internet and last approximately 1.5 to 2 hours.  If we need a little extra time, I always ask clients to block out three hours.  During the initial 15-minute consultations, we will review the information you gave me and clarify exactly what you want to do and how you want to be.  This will be followed by an RTT®  hypnotherapy session, which includes hypnosis and regression to find the root cause of the issue.  Your session will be completed with a reframing and powerful transformation that aims at installing a positive new suggestion into your subconscious mind.
</p>
        </div>
    </li>
    <li class="c-stepper__item"><h1 data-aos="fade-right"   class="c-stepper__title">Step 3</h1>
        <div data-aos="fade-left" class="c-stepper__content">
            
            <h2 class='c-stepper__package-name'>Hypnotherapy Voice Recording + Optional Video                       
		Deepener
</h2>
            <p class='c-stepper__package-desc'>After our session, I will produce a voice recording that you listen to daily for a minimum of 21 days following your session.  I will send this recording to you via email so you can download the recording onto your mobile phone or computer for daily listening.
The success of your investment depends on the fact that you listen to your recording daily for at least 21 days following your session.  Repeated listening to your recording will allow the new, positive and supporting beliefs to be firmly installed.  Doing so will break those old unwanted habits and create new neurological pathways, rewiring the brain.
A custom Video Deepener is offered as an add-on.  The video deepener comprises a hypnotic video animation, my suggestive voice and meditative background music.  The video animation has been designed in such a way that it will allow my evocative voice to reach the deeper levels of your subconscious mind while your conscious mind is drawn in and fascinated by the hypnotic video animation.


</p>
        </div>
    </li>
    <li class="c-stepper__item">  <h1 data-aos="fade-right"  class="c-stepper__title">Step 4</h1>
        <div data-aos="fade-left" class="c-stepper__content">
          
            <h2 class='c-stepper__package-name'>Post-Session Follow-Up</h2>
            <p class='c-stepper__package-desc'>The success of your investment depends on the fact that you listen to your recording daily for a minimum of 21 days following your RTT®  hypnotherapy session.  I will be with you 10 days after your session to support you.  After 21 days of listening to the recording, we will schedule a check-in call.



</p>
        </div>
    </li>
  </ol>
</div>
  )
}

export default Stepper