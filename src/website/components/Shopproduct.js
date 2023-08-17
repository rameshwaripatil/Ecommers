import React, { useEffect, useState } from 'react'
import Slider from '../main component/Slider';
import Productlist from './Productlist';
import Categroyslider from './Categroyslider';
import Ourprolist from './Ourprolist';

const Shopproduct = () => {
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
      <Slider></Slider>
      <Categroyslider></Categroyslider>
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
        <div className="shop-widget">
          <h6 className="shop-widget-title">Filter by Category</h6>
          <form>
           
            <ul class="shop-widget-list shop-widget-scroll" style={{ maxHeight: 279, overflowY: 'scroll', paddingRight: 10 }}>
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
{ 
filterbrand.map((el) => ( 
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
      <div class="col-lg-9">
        <Ourprolist></Ourprolist>
      </div>
     
    </div>
    
  </div></div>
  )
}

export default Shopproduct