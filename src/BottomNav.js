import BottomNavigation from "reactjs-bottom-navigation"
import 'reactjs-bottom-navigation/dist/index.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'
import {HiMail} from 'react-icons/hi'
import React from 'react'
import { useNavigate } from "react-router-dom"
import './bottomnav.css'

const BottomNav = () => {
    const navigate = useNavigate();
  
    const bottomNavItems = [
        {
          title: 'Home',
    
          icon: <AiFillHome style={{ fontSize: '18px' }} />,
    
          activeIcon: <AiFillHome style={{ fontSize: '18px', color: '#fff' }} />,
          onClick:() => navigate('/') 
        },
    
        {
          title: 'Appointment',
    
          icon: <AiOutlineContacts style={{ fontSize: '18px' }} />,
    
          activeIcon: <AiOutlineContacts style={{ fontSize: '18px', color: '#fff' }} />,
          onClick:() => navigate('/appointment') 
        },
    
     
    
        {
          title: 'Contact',
    
          icon: <HiMail style={{ fontSize: '18px' }} />,
    
          activeIcon: <HiMail style={{ fontSize: '18px', color: '#fff' }} />,
    
          onClick:() => navigate('/contact') 
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