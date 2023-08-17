import React from 'react'
import "./Feature.css"
const Feature = (props) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="bg-white text-center h-100 p-4 p-xl-5">
        <div className="position-relative bg-light overflow-hidden">
          <img className="img-fluid" src={props.img} style={{ height: '100px' }} />
          <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
            {props.mrp-props.sale}Rsoff
          </div>
        </div>
        <h4 className="mb-3">{props.name}</h4>
        <p className="mb-4">{props.brand}</p>
        <div>
          <span className="text-primary me-1">{props.sale}</span>
          <span className="text-body text-decoration-line-through">{props.mrp}</span>
        </div>
        <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">
          Read More
        </a>
      </div>
    </div>
  )
}

export default Feature