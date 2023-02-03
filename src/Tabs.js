import { useState, useEffect } from "react";
import './toggletab.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import {BiBody} from 'react-icons/bi'
import {RiMentalHealthLine} from 'react-icons/ri'
import {MdNoFood} from 'react-icons/md'
import {MdFamilyRestroom} from 'react-icons/md'
import {BiDonateHeart} from 'react-icons/bi'
import {GiLovers} from 'react-icons/gi'
import {FaRegFrownOpen} from 'react-icons/fa'
import {GiBackPain} from 'react-icons/gi'
import {BiTired} from 'react-icons/bi'
import {FaRegSmileBeam} from 'react-icons/fa'
import BodyImg from './image/body.png'
import Healthimg from './image/health.jpg'
import EatingImg from './image/eatting.png'
import Familyimg from './image/family.jpg'
import Carrier from './image/rier.jpg'
import Romance from './image/rommance.jpg'
import Fear from './image/fear.jpg'
import Stress from './image/stress.jpg'
import Panic from './image/panic.jpg'
import Motivation from './image/motivation.jpg'
function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
    useEffect(()=>{
      Aos.init({duration:3000})
    },[])
    return (
      
      <div data-aos="fade-up" className="tabcontainer">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Weight Management
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Relationships
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Self Esteem
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
           
            <hr />
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <BiBody className="accoricon"/>
       Body Image
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <img className="tabimg" src={BodyImg} alt="" />
        What do you see when you look in the mirror?
Do you see your body in a positive or negative way?
Are you happy or sad with the way you look?
Ugh, my hair looks horrible! I think I need to lose a
little weight. My  figure looks fabulous! These are all
comments that we, as individuals, have said to ourselves
at one point or another, <br /> and they all relate to body image.
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <RiMentalHealthLine className="accoricon"/>
       Health Issues
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img className="tabimg" src={Healthimg} alt="" />
      <ul>
      <li>Gastroesophageal reflux disease (GERD) </li>
      <li>Diabetes risk, metabolic syndrome, and prediabetes </li>
      <li>Type 2 diabetes </li>
      <li>Asthma/reactive airway disease </li>
      <li>Cardiovascular disease* and cardiovascular disease mortality  Hypertension </li>
      <li>Polycystic ovary syndrome (PCOS) </li>
      <li>Urinary stress incontinence</li>
 </ul>

     
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <MdNoFood className="accoricon"/>
       Eating Disorder
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img className="tabimg" src={EatingImg} alt="" />
  Common eating disorders include  anorexia nervosa,
bulimia nervosa, and binge-eating disorder.  Anorexia
nervosa is a condition where people avoid <br /> food, severely
restrict food or eat very small quantities of only certain <br /> foods.
Eating disorders are serious conditions that cause both physical
and emotional  damage. All eating disorders can lead to irreversible
and even <br /> life-threatening health problems, such as  heart disease,
bone loss, stunted growth, infertility, and kidney damage. Many
people worry about their  <br /> weight, what they eat, and how they look.
     
      </div>
    </div>
  </div>
            </div>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
         
            <hr />
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     
        <MdFamilyRestroom className="accoricon"/>
      Family
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img className="tabimg" src={Familyimg} alt="" />
    The state of being connected by blood, marriage or adoption. Maintaining
a strong relationship requires  constant care and communication, and
certain traits have been shown to be especially important for  fostering <br />
healthy relationships.
     
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     
      <BiDonateHeart className="accoricon"/>
       Career
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img className="tabimg" src={Carrier} alt="" />
      Positive relationships in the workplace are an integral part of career <br /> success.
When building relationships in the workplace, you will notice an <br /> increase in
productivity and overall job satisfaction. You can build lasting, <br /> professional
relationships by taking certain steps toward understanding <br /> your emotional
intelligence and  getting to know your coworkers.
      
      </div>
    </div>
  </div>
 
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    
      <GiLovers className="accoricon"/>
       Romance
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img className="tabimg" src={Romance} alt="" />
 Love is one of the most profound emotions known to human beings. There
are many kinds of love, but  many people seek its expression in a romantic
relationship with a compatible partner (or partners). For these individuals,<br />
romantic relationships comprise one of the most meaningful aspects of life,
and are a source of deep fulfillment. While need for human connection <br />
appears to be innate, the ability to form healthy,  loving relationships is
learned. Some evidence suggests that the ability to form a stable relationship <br />
starts to form in infancy, in a child&#39;s earliest experiences with a caregiver <br /> who
reliably meets the infant&#39;s needs for food, care, warmth, protection, <br /> stimulation,
and social contact.
     
      </div>
    </div>
  </div>
            </div>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
 
            <hr />
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <FaRegFrownOpen className="accoricon"/>
        Fears and Phobias
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img className="tabimg" src={Fear} alt="" />
     The first thing to note is the fact that ‘fear’ and ‘phobia’ are not the
same <br /> things. They are two completely different things though they are
similar and interconnected, using them interchangeably is still incorrect.
Fear is a <br /> common feeling experienced by everyone. Phobia is a form of
anxiety <br /> disorder, which refers to excessive and persistent fear of objects
and <br /> situations which do not carry real threats; Specificity. Fear can be felt
by <br /> anyone when faced with an unknown or dangerous situation. Phobia
will <br /> cause irrational fear that will consume most of most of your <br />
 time and energy.
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <GiBackPain className='accoricon'/>
      Panic Attacks
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img className="tabimg" src={Panic} alt="" />
    Panic attacks are classified into three basic types: Spontaneous or uncued
panic attacks occur without warning or “out of the blue.” No situational or
<br /> environmental triggers are associated with the attack. In any given year,
up to 3 percent of American adults experience panic disorders. Panic disorder
can happen to anyone, and there doesn’t seem to be any particular group <br /> that’s
immune to it. Most people first start to experience panic attack <br /> symptoms in their
20s, but they can also happen to children.
      
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <BiTired className="accoricon"/>
      Stress
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img className="tabimg" src={Stress} alt="" />
     Stress is a biological reaction that all of us can experience at any age.

<br /> National Institutes of Mental Health (NIMH) define it as “how the brain
and body respond to any demand.” Stress can be routine, brought on
by <br /> sudden negative change or Ttauma experienced during an event
such as an accident, war or a natural disaster. According to Harvard
Health, as we <br /> get older, stress can come “as a result of managing br
 chronic illness, <br /> losing a spouse, being a caregiver, or adjusting to changes due to
finances, retirement, or separation from friends and family.” Some people
are able to cope with stress and recover better than others, but long-term
stress can be difficult to manage and it could be harmful to your health.
     
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <FaRegSmileBeam className="accoricon"/>
      Motivation
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <img className="tabimg" src={Motivation} alt="" />
      Motivation is our drive to do things. It’s the element that keeps us moving <br />
towards our goals. Motivation is essential and can go up and down <br /> depending
on our self-control and other external circumstances that affect our action. 
These uncontrollable factors further define the level of <br /> motivation a person has
in terms of achievement.  You do the action and <br /> then the motivation comes not
the other way around.

     
      </div>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Tabs;