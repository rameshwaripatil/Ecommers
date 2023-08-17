import React, { useState } from 'react'
import Feature from './Feature';
import "./Feature.css"

const Featurelist = () => {
    const [ourpro, setourpro] = useState([])
    fetch("https://vsmart.ajspire.com/api/products").then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            setourpro(data.products.data)
        }
    )
  return (

        <div class="container-fluid bg-light bg-icon py-6 mb-5">
           
        <div class="container">
           
          <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 400}}>
            <h1 class=" text-center display-5 mb-3">Our Featured product</h1>
          </div>
    
    <div class="parent-container">
        {
            ourpro.slice(0,20)
            .filter((el)=>el.featured===1)
            .map((el)=>
            {
                return(
                    <Feature
                    img={el.product_image}
                    name={el.english_name}
                    brand={el.brand_name}
                    mrp={el.mrp_price}
                    sale={el.sale_price}></Feature>
                )
            })
        }
   
    </div>
    </div>
    </div>
  )
}

export default Featurelist