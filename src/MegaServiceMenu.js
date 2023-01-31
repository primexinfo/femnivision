import React,{useState, useEffect} from 'react'
import './mega.css'
import axios from "axios";
import { api, IMG_BASE_URL } from "./api/api";
import { Button } from './Button';
import "./pricesection.css";
import "./infosection.css";
import { Link } from 'react-router-dom';
const MegaServiceMenu = () => {
    const [program, setAllProgram] = useState([]);
    const [navbar, setNavbar] = useState(false)
    const [count , setCount] = useState()
    useEffect(() => {
      const timer = setTimeout(() => {
        setCount('Timeout called!');
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        axios
          .get(api.allProgramm)
          .then((res) => {
            setAllProgram(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
    <>
    <div class="ruby-menu-demo-header">
     
        <ul class="ruby-menu">
          <li class="ruby-menu-mega-blog package">
            <li className="nav-link service" href="#">SERVICES🢓
            
            </li>
            
            <div style={{minHeight: "220px", width: "670px", marginLeft:"-90px"  }} class="">
              <ul class="ruby-menu-mega-blog-nav">
                
                     {program.map((val, ind) => {
                        return (
                          <>
                            <li style={{marginLeft:"-10px"}} class="ruby-active-menu-item">
                  <Link onClick={count} to={`/program/${val.id}`}>{val.title}</Link>
                  <div
                    class="ruby-grid ruby-grid-lined"
                    style={{height: "220px", width: "700px"}}
                  >
                    <div class="ruby-row">
                      <div class="ruby-col-4">
                        <Link onClick={count} to={`/program/${val.id}`}><img  src={`${IMG_BASE_URL}/services/${val.photo}`} style={{marginBottom: "50px", height:"auto", width:"250px", objectFit:"fill"}}/></Link>
                        
                      </div>
                      <div class="ruby-col-4">
                        <span class="ruby-c-title ruby-margin-10">
                          <Link onClick={count} to={`/program/${val.id}`}><a >{val.title}</a></Link>
                          
                        </span>
                        <span class="ruby-c-content">
                          <Link onClick={count} to={`/program/${val.id}`}> 
                          <div  className='c-content-text'>
                             {val.sub_title}
                          </div>
                          </Link>
                         
                   
                 
                          <br />
                          <Button  onClick={count} refresh="true" to={`/program/${val.id}`} className="home-button"   style={{marginTop: "30px", float:"right",}}>
                            Read More
                          </Button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span class="ruby-dropdown-toggle"></span>
                </li>
                            
                          </>
                        );
                      })}
                
               
              </ul>
            </div>
            <span class="ruby-dropdown-toggle"></span>
          </li>
        </ul>
      
    </div>
  </>
  )
}

export default MegaServiceMenu