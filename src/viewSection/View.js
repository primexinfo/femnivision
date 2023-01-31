import React, {useEffect, useState} from 'react'

import "./view.css"
import axios from 'axios';
import { api, IMG_BASE_URL } from '../api/api';

import { Button } from '../Button';
// import Button from './../Button'
import Aos from 'aos';

import 'aos/dist/aos.css'



// import required modules

function View( props) {
  const [testimonial, setTestimonial] = useState([])
  const [index, setIndex] = useState(0)

useEffect(()=>{
  axios.get(api.testimonial).then(
    (res)=>{
      setTestimonial(res.data)
    }
  ).catch((err)=>{
    console.log(err);
  })
},[])


  useEffect(()=>{
    Aos.init({duration:2500})
  },[])

  useEffect(()=>{
    const lastIndex = testimonial.length -1
    if(index<0){
      setIndex(lastIndex)
    }
    if(index>lastIndex){
      setIndex(0)
    }
  },[index, testimonial])

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex(index+1)
    }, 4000)
    return ()=>{
      clearInterval(slider)
    }
  }, [index])
  return  <>
  
  <section   className='section'>
    <div className="title">
      <h2 data-aos="fade-left" className="hero-title">here are Some feedback from my clients</h2>
    </div>
    <div data-aos="fade-up"  className="section-center">
      {testimonial.map((item, key)=>{
        
        let position = "nextSlide"
        if(key === index){
          position = 'activeSlide'
        }
        if(key === index -1 || (index===0 && key === testimonial.length -1)){
          position = "lastSlide"
        }
        return (
          <article className={position} key={item.id} >
            <img src={`${IMG_BASE_URL}/testimonials/${item.photo}`} alt={item.title} className="person-img" />
            <h4>{item.title}</h4>
            <p className='text' dangerouslySetInnerHTML={{__html:item.details}} ></p>
            {/* <Button className='appoinment-button'>make an appointment</Button> */}
          </article>
        )
      })}
      <button className='next' onClick={()=> setIndex(index -1)}>
        <i className='fas fa-arrow-left'></i>
      </button>
      <button className='prev' onClick={()=> setIndex(index +1)}>
        <i className='fas fa-arrow-right'></i>
      </button>
    </div>
    
  </section>
 
   </>
}

export default View