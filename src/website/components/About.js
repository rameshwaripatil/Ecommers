import React from 'react';
 import './About.css'; // Import the CSS file
const About = () => {
  return (
    <div>
     <section class="inner-section single-banner">
     <div class="container"style={{ backgroundImage: "url('https://img.freepik.com/premium-psd/vegetable-grocery-delivery-promotion-web-banner-facebook-cover-instagram-template-psd_502896-322.jpg?w=2000 ')" ,maxHeight:"2000px",marginTop:"200px",marginBottom:"200px"}}>
        <h2 class="h2">About our company</h2>
        <h4 class="text-black">
        <ol class="breadcrumb">
            <i class="fas fa-home" ></i> &nbsp;
           <h4 class="h4">Home/ </h4>               
           <h4 >About</h4>
        </ol>
        </h4>
    </div>
    </section>
    <section class="inner-section about-company">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6" >
                <div class="about-content">
                    <h2>Vishwakarma Super Mart Private Limited</h2>
                    <p>is a direct selling company that deals with the distribution of a wide range of high quality,
                         lifestyle products for day to day life. Our aim is to deliver the best products directly to our consumers,
                          who form the core of the company. Our networks of registered distributors are trained leaders and 
                          representatives who ensure that consumers get the best products, with additional free business 
                          opportunity benefits. The profitable opportunities offered have influenced many customers to purchase 
                          products from non-retail environments, owing to the expansion of direct selling across the country.</p>
                </div>
              
            </div>
            <div class="col-lg-3">
                <div><img style={{width: 250}} src="https://vsmart.ajspire.com/images\about1.png" alt="about" data-pagespeed-url-hash="3642807828" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/></div>
            </div>
            <div class="col-lg-3">
                <div><img style={{width: 250}} src="https://vsmart.ajspire.com/images\about2.png" alt="about" data-pagespeed-url-hash="3937307749" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/></div>
            </div>
        </div>
    </div>
</section>
<section class="inner-section about-company">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="about-content">
                    <h2 >Our Vision</h2>
                    <p>Vishwakarma Super Mart Private Limited to strive hard continuously and constantly to make every individual customer financially self-reliant, economically and socially strong through the self - help team concept.</p>
                </div>
              
            </div>
            
            <div class="col-lg-6">
                <div class="about-content">
                    <h2 >Our Mission</h2>
                    <p>Vishwakarma Super Mart Private Limited has vision to create wealth that provides personal, professional, social, financial and spiritual growth to everyone. We aim to provide the highest level of quality and service possible with respect to the products and services that we offer and strive to create an environment and culture that lends itself to our distributor’s success.</p>
                </div>
              
            </div>
            
           
        </div>
    </div>
</section>
    </div>
  );
};

export default About;
