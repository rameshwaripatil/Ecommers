import React from 'react';
import {RiMapPin2Fill } from 'react-icons/ri';
import {BsTelephoneFill} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';
import{FaShuttleVan} from 'react-icons/fa';
import {FaSyncAlt} from 'react-icons/fa';
import{FaHeadset} from 'react-icons/fa';
import {FaUnlock} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
export const Contact = () => {
  return (

<div className="card  text-black">
<div className="header-section" style={{ backgroundImage: "url('https://img.freepik.com/premium-psd/vegetable-grocery-delivery-promotion-web-banner-facebook-cover-instagram-template-psd_502896-322.jpg?w=2000')" ,maxHeight:"1000px",marginTop:"200px"}}>
<h2 class="h2">Contact us</h2>
        <h4 class="text-black">
        <ol class="breadcrumb">
            <i class="fas fa-home" ></i> &nbsp;
           <h4 class="h4">Home/ </h4>               
           <h4 >contact us</h4>
        </ol>
        </h4>
      </div>
    
    <section class="inner-section contact-part">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="contact-card"><i class="icofont-location-pin"></i>
                    <RiMapPin2Fill/>
                        <h4>Head Office</h4>
                        <p>A/P Koregaon, 2978 Jalgaon Road, Tal - Koregaon, Dist. Satara Pin 415501</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="contact-card active"style={{backgroundColor:'green',height:"120px",width:'150px'}}><i class="icofont-phone"></i>
                       <BsTelephoneFill/> <h4 >phone number</h4>
                        <p><a href="tel:8446092500">8446092500</a></p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="contact-card"><i class="icofont-email"></i>
                      <AiTwotoneMail/>  <h4>Support mail</h4>
                        <p><a href="mailto:vsmart12@gmail.com">vsmart0932@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6" >
                    <div class="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.595747449805!2d74.6065833141991!3d18.182527084172186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc39f20ee56320b%3A0xd5463f385bb99c10!2sAjspire%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1650006281990!5m2!1sen!2sin" width="500" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        
                            </div>
                </div>
                <div class="col-lg-6">
                    <form action="/contact-us" method="POST" class="contact-form">
                    <input type="hidden" name="_token" value="KZNji9PO2aHwsnfb3PHzHYZQMOkh0PyrX8mexoIg"/>  <h4>Drop Your Thoughts</h4>
                    <div class="form-group">
                            <div class="form-input-group"><input class="form-control" type="text" name="contact_name"placeholder="Your Name" /><i class="icofont-email"></i></div>
                        </div>
                        <div class="form-group">
                            <div class="form-input-group"><input class="form-control" type="text" name="contact_email" placeholder="Your Email"/><i class="icofont-email"></i></div>
                        </div>
                        <div class="form-group">
                            <div class="form-input-group"><input class="form-control" type="text" name="contact_subject" placeholder="Your Subject"/><i class="icofont-book-mark"></i></div>
                        </div>
                        <div class="form-group">
                            <div class="form-input-group"><textarea class="form-control" name="contact_massage" placeholder="Your Message"></textarea></div>
                        </div><button type="submit" onclick="return confirm('are you sure?')" class="form-btn-group"><span style={{backgroundColor:'green'}}> <AiOutlineMail/>send
                                message</span></button>
                    </form>
                </div>
            </div>
            </div>
            <br></br>


            <section class="intro-part">
        <div class="container">
            <div class="row intro-content">
                <div class="col-sm-6 col-lg-3">
                    <div class="intro-wrap">
                        <div class="intro-icon"></div>
                        <div class="intro-content">
                           <FaShuttleVan/> <h5>free home delivery</h5>
                            <p>Eassy to home delivery.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="intro-wrap">
                        <div class="intro-icon"><i class="fas fa-sync-alt"></i></div>
                        <div class="intro-content">
                        <FaSyncAlt/><h5>instant return policy</h5>
                            <p>instant return policy with special gifts.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="intro-wrap">
                        <div class="intro-icon"><i class="fas fa-headset"></i></div>
                        <div class="intro-content">
                          <FaHeadset/><h5>quick support system</h5>
                            <p>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="intro-wrap">
                        <div class="intro-icon"></div>
                        <div class="intro-content">
                          <FaUnlock/>  <h5>secure payment way</h5>
                            <p>Eassy and secure payment methode are use.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
       </section>
    </section>                  
    </div>
  )
}
export default  Contact