import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Brandslider from './Brandslider';
import img from '../layout/logo1.png';

const Brand = () => {
  const [filtercat, setfiltercatagory] = useState([]);
  const [filterbrand, setfilterbrand]=useState([]);
    useEffect(() => {
        fetch("https://vsmart.ajspire.com/api/categories")
            .then((response) => response.json())
            .then((dataa) => {
              setfiltercatagory(dataa.categories);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
            fetch("https://vsmart.ajspire.com/api/brands")
            .then((response) => response.json())
            .then((dataa) => {
              setfilterbrand(dataa.brands);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        }, []);

  return (
    <div>
    <section class="inner-section single-banner"style={{
    background: {img},
    backgroundSize: 'cover'
  }}>
            <div class="container">
                <h2>Halani Foods Pvt Ltd</h2> / <h3 class="text-white">
                    <ol class="breadcrumb">
                        <i class="fas fa-home"></i> &nbsp;<li class="breadcrumb-item"><a href="/">Home</a></li>
                        /<li aria-current="page"> Halani Foods Pvt Ltd</li>
                    </ol>
                </h3>
                <a type="button" style={{position: "relative", width:"10%"}} class="position-absolute bottom-50 end-0  link-dark" href="https://vsmart.ajspire.com/product-shop">
                    <i class="fas fa-arrow-right"></i></a>
                <a type="button" style={{position: "relative", width:"10%" }}class="position-absolute bottom-50 start-0  link-dark" href="https://vsmart.ajspire.com/product-shop/207">
                    <i class="fas fa-arrow-left"></i></a>
            </div>
        </section>
      <Brandslider></Brandslider>
    <div class="container">
    <form action>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search by name" />
        <div className="input-group-append">
          <span className="input-group-text bg-transparent text-primary">
            <i className="fa fa-search" />
          </span>
        </div>
      </div>
    </form>
<div class="row content-reverse">
<div class="col-lg-3">
<div className="shop-widget" style={{padding: '20px 20px',
  borderRadius: '8px',
  marginBottom: '25px',
  background: 'var(--white)'}}>
  <h6 className="shop-widget-title">Filter by Category</h6>
  <form>
   
    <ul class="shop-widget-list shop-widget-scroll"style={{ maxHeight: 279, overflowY: 'scroll', paddingRight: 10 }}>
{filtercat.map((ell) => ( 
<div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
<input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
<label className="custom-control-label" htmlFor="price-all">{ell.category_name}</label>

</div>
))}
</ul>
  </form>
</div>
<div className="shop-widget">
  <h6 className="shop-widget-title">Filter by Brands</h6>
  <form>
  <form>
   
   <ul class="shop-widget-list shop-widget-scroll"style={{ maxHeight: 279, overflowY: 'scroll', paddingRight: 10 }}>
{filterbrand.map((el) => ( 
<div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
<input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
<label className="custom-control-label" htmlFor="price-all">{el.brand_name}</label>

</div>
))}
</ul>
 </form>
  </form>
</div>




</div>

</div>
</div>
</div>

  )
}

export default Brand