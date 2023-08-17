import React, { useState } from 'react'
import Grocery from './Grocery';
import Slider from '../main component/Slider';

const Grocerylist = () => {
    const [ourgro,setourgro]=useState([])
    fetch("https://vsmart.ajspire.com/api/categories").then(
        (response) => {
             
            return response.json();
                    }
                ).then(
                    data => {
                        // console.log(data.categories);
            setourgro(data.categories)
                    }
                )
  return (
    <div>
    
    <div class="container-fluid bg-light bg-icon py-6 mb-5">
  <div class="container">
    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 400}}>
      <h1 class=" text-center display-5 mb-3">Category</h1>
    </div>
 
    <div class="row">
          { 
          ourgro.map((el) => (
           <Grocery
           key={el.category_id}
              img={el.category_image}
              name={el.category_name}
              banner={el.category_banner}></Grocery>
              
          ))}
          </div>
          </div>
          </div>
          </div>
    
  )
}

export default Grocerylist