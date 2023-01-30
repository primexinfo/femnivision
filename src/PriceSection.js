import React, { useEffect } from "react";
import { Button } from "./Button";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import './pricesection.css'
import { NavLink } from "react-router-dom";

// import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

const PriceSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div data-aos="fade-up"   class="demo">
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div  class="pricingTable">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-smile-beam"></i>
                        <div class="price-value"> $397.00 <span class="month"> LIMITED TIME OFFER
</span> </div>
                    </div>
                    <h3 class="heading">TRANSFORMATION 30   
AVAILABLE FOR ONLY
</h3>
                    <div class="pricing-content">
                        <ul>
                        <li className="priceList-bga">Hypnotic relaxation recording to introduce you to hypnotherapy sessions Value $99
</li>
                        <li className="priceList-bgb">1.5 hour to 2 hour session to address Issue/concern Value $350
</li>
                        <li className="priceList-bga">Hypnotic custom voice recording Value $198
</li>
                        <li className="priceList-bgb">15-minute check-in call 7 days after the session Value $99 
</li>

                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                       <a href="/payment">Book Now</a>
                      
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="pricingTable ">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-smile-beam"></i>
                        <div class="price-value"> $797.00 <span class="month">LIMITED TIME OFFER
</span> </div>
                    </div>
                    <h3 class="heading">TRANSFORMATION 60 + THERAPEUTIC EFT
</h3>
                    <div class="pricing-content">
                        <ul>
                        <li className="priceList-bga">Hypnotic relaxation recording Value $99
</li>
                        <li>(2) 1.5 hour to 2 hour hypnotherapy session to address main issue/concern Value $700
</li>
                        <li className="priceList-bga">(2) Custom recording Transformation Value $396
</li>
                        <li>15 minute check-in call 7 days after the session Value $198</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="/appointment">Book Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable ">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-smile-beam"></i>
                        <div class="price-value"> $1841.00 <span class="month">LIMITED TIME OFFER
</span> </div>
                    </div>
                    <h3 class="heading">TRANSFORMATION 90 + THERAPEUTIC EFT
</h3>
                    <div class="pricing-content">
                        <ul>
                            <li className="priceList-bga">Hypnotic relaxation recording value $99
</li>
                            <li>(3) 1.5 hour to 2 hour hypnotherapy session to address main concern Value $1050
</li>
                            <li className="priceList-bga">(3) Custom recording Transformation Value $594
</li>
                            <li>(3) 1 hour Therapeutic EFT session to help improve you forward Value $588
</li>
                          
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="/appointment">Book Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable ">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-smile-beam"></i>
                        <div class="price-value"> $40.00 <span class="month">LIMITED TIME OFFER</span> </div>
                    </div>
                    <h3 class="heading">HYPNOTIC VIDEO DEEPENER
</h3>
                    <div class="pricing-content">
                        <ul>
                       <li className="priceList-bga">
30 minute consultation Value $199 
</li>
                       <li>Hypnotic Video Deepener created with custom script and voice over with background music and animation to reinforce installation of new positive beliefs into the subconsci!ous mind Length 10-15 minutes Value $199
</li>
<li className="priceList-bga">Unlimited email support for 90 days after first session Value is Priceless
</li>

                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="/appointment">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <a target="_blank" href="#" className="white-mode">MORE ></a> */}
</>
    
    // <section className="pricing py-5">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-3">
    //         <div className="card mb-5 mb-lg-0">
    //           <div className="card-head card-head-bg">
    //             {" "}
    //             <h5 className=" card-title text-white  text-center ">
    //               Deep relaxation
    //             </h5>
    //             <hr />
    //           </div>
    //           <div
    //             data-aos="fade-up"
    //             data-aos-duration="5000"
    //             className=" card-body"
    //           >
    //             <ul className="fa-ul">
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Single User
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 5GB Storage
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Public Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Community Access
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Unlimited Private Projects
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Dedicated Phone Support
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Free Subdomain
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Monthly Status Reports
    //               </li>
    //             </ul>
    //             <div className="d-grid">
    //               {/* <a href="#" className="btn btn-primary text-uppercase">Button</a> */}
    //               <button className="home-button p-btn">TRY IT FREE</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-lg-3">
    //         <div className="card mb-5 mb-lg-0">
    //           <div
    //             data-aos="fade-up"
    //             data-aos-duration="4000"
    //             className="card-body"
    //           >
    //             <h5 className=" price-title card-title text-uppercase text-center">
    //               anxity and stress
    //             </h5>
    //             <h6 className="card-price text-center">
    //               $9<span className="period">/month</span>
    //             </h6>
    //             <hr />
    //             <ul className="fa-ul">
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 <strong>5 Users</strong>
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 50GB Storage
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Public Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Community Access
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Private Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Dedicated Phone Support
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Free Subdomain
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Monthly Status Reports
    //               </li>
    //             </ul>
    //             <div className="d-grid">
    //               {/* <a href="#" className="btn btn-primary text-uppercase">Button</a> */}
    //               <button className="home-button p-btn">TRY IT FREE</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-lg-3">
    //         <div className="card mb-5 mb-lg-0">
    //           <div
    //             data-aos="fade-up"
    //             data-aos-duration="4000"
    //             className="card-body"
    //           >
    //             <h5 className="price-title card-title text-uppercase text-center">
    //               phobias and fears
    //             </h5>
    //             <h6 className="card-price text-center">
    //               $9<span className="period">/month</span>
    //             </h6>
    //             <hr />
    //             <ul className="fa-ul">
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 <strong>5 Users</strong>
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 50GB Storage
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Public Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Community Access
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Private Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Dedicated Phone Support
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Free Subdomain
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Monthly Status Reports
    //               </li>
    //             </ul>
    //             <div className="d-grid">
    //               {/* <a href="#" className="btn btn-primary text-uppercase">Button</a> */}
    //               <button className="home-button p-btn">TRY IT FREE</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-lg-3">
    //         <div className="card mb-5 mb-lg-0">
    //           <div
    //             data-aos="fade-up"
    //             data-aos-duration="2000"
    //             className=" card-body"
    //           >
    //             <h5 className="price-title card-title  text-uppercase text-center">
    //               sleep improvement
    //             </h5>
    //             <h6 className="card-price text-center">
    //               $9<span className="period">/month</span>
    //             </h6>
    //             <hr />
    //             <ul className="fa-ul">
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 <strong>5 Users</strong>
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 50GB Storage
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Public Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Community Access
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Private Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Dedicated Phone Support
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Free Subdomain
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Monthly Status Reports
    //               </li>
    //             </ul>
    //             <div className="d-grid">
    //               {/* <a href="#" className="btn btn-primary text-uppercase">Button</a> */}
    //               <button className="home-button p-btn">TRY IT FREE</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    //     <PricingTable  highlightColor='#1976D2'>
    //     <PricingSlot className='priceBox'  onClick={''}   title='FREE' priceText='$0/month'
    //     >
    //         <PricingDetail> <b>5</b> therapy</PricingDetail>
    //         <PricingDetail> <b>2 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>1</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>
    // <PricingSlot  onClick={''} buttonText='' title='BASIC' priceText='$20/month'>
    //         <PricingDetail> <b>10</b> therapy</PricingDetail>
    //         <PricingDetail> <b>3 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>3</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>
    //     <PricingSlot  onClick={''}  title='PREMIUM' priceText='$50/month'>
    //         <PricingDetail> <b>15</b> therapy</PricingDetail>
    //         <PricingDetail> <b>5 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>5</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>
    //     <PricingSlot  onClick={''}  title='PREMIUM' priceText='$50/month'>
    //         <PricingDetail> <b>15</b> therapy</PricingDetail>
    //         <PricingDetail> <b>5 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>5</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>
    //     <PricingSlot  onClick={''}  title='PREMIUM' priceText='$50/month'>
    //         <PricingDetail> <b>15</b> therapy</PricingDetail>
    //         <PricingDetail> <b>5 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>5</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>

    //     </PricingTable>
  );
};

export default PriceSection;
