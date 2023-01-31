import BottomNavigation from "reactjs-bottom-navigation"
import 'reactjs-bottom-navigation/dist/index.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'
import {HiMail} from 'react-icons/hi'
import {FcAbout} from 'react-icons/fc'
import React from 'react'
import { useNavigate } from "react-router-dom"
import './bottomnav.css'

const BottomNav = () => {
    const navigate = useNavigate();
  
    const bottomNavItems = [
        {
          title: 'Home',
    
          icon: <AiFillHome style={{ fontSize: '18px' , color:"#2196f3" , borderRadius:"50%" , background:"#0000" }} />,
    
          activeIcon: <AiFillHome style={{ fontSize: '18px', color: '#fff' }} />,
          onClick:() => navigate('/') 
        },
        
        {
            title: 'About',
      
            icon: <FcAbout style={{ fontSize: '18px' , color:"#2196f3" }} />,
      
            activeIcon: <FcAbout style={{ fontSize: '18px', color: '#fff' }} />,
      
            onClick:() => navigate('/about') 
          },
          {
            title: 'Service',
      
            icon: <HiMail style={{ fontSize: '18px' , color:"#2196f3"  }} />,
      
            activeIcon: <HiMail style={{ fontSize: '18px', color: '#fff' }} />,
      
            onClick:() => navigate('/programs') 
          },
    
        {
          title: 'Appointment',
    
          icon: <AiOutlineContacts style={{ fontSize: '18px',  color:"#2196f3"  }} />,
    
          activeIcon: <AiOutlineContacts style={{ fontSize: '18px', color: '#fff' }} />,
          onClick:() => navigate('/appointment') 
        },
    
     
    
      ] 
  return (
    <div className='bottom-nav'>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) => console.log(item)}
      />
    </div>
  )
}

export default BottomNav