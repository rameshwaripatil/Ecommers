import React from 'react'
import Image from '../layout/logo1.png';

const Footer = () => {
  return (
    <div> <div><div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <img src={Image} />
          <p>Vishwakarma Super Mart Private Limited, is a direct selling company that deals with the distribution of a wide range of high quality, lifestyle products for day to day life.</p>
          <div className="d-flex pt-2">
            <a className="btn btn-square btn-outline-light rounded-circle me-1" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-square btn-outline-light rounded-circle me-1" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-square btn-outline-light rounded-circle me-1" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-square btn-outline-light rounded-circle me-0" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Address</h4>
          <p><i className="fa fa-map-marker-alt me-3" />A/P Koregaon, 2978 Jalgaon Road, Tal - Koregaon, Dist. Satara Pin 415501</p>
          <p><i className="fa fa-phone-alt me-3" />+91 8446092500</p>
          <p><i className="fa fa-envelope me-3" />vsmart0932@gmail.com</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Quick Links</h4>
          <a className="btn btn-link" href>About Us</a>
          <a className="btn btn-link" href>Contact Us</a>
          <a className="btn btn-link" href>Our Services</a>
          <a className="btn btn-link" href>Terms &amp; Condition</a>
          <a className="btn btn-link" href>Support</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Newsletter</h4>
          <div className="position-relative mx-auto">
            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a href="#">Copyright 2022 by V S Mart</a>, All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            Designed By <a href="https://www.ajspire.com/">Ajspire Technologies Pvt.Ltd</a>
          </div>
        </div>
      </div>
    </div>
  </div></div></div>
  )
}

export default Footer