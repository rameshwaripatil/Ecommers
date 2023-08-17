import React from 'react'

const Grocery = (props) => {
  return (
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div class=" testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
        <div class="testimonial-item position-relative bg-white p-5 mt-4">
            <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
            <p class="mb-4">{props.name}</p>
            <div class="d-flex align-items-center">
                <img class="flex-shrink-0 rounded-circle" src={props.banner} style={{height:100}}/>
            
            </div>
        </div>
       
    </div>
</div>

    
  )
}

export default Grocery