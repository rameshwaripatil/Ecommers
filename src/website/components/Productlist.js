import React, { useState, useEffect } from 'react';
import Categroyslider from './Categroyslider';
import Slider from '../main component/Slider';

const Productlist = () => {
  const [cat, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetch("https://vsmart.ajspire.com/api/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCategory(data.categories);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });

    fetch("https://vsmart.ajspire.com/api/brands")
      .then(response => response.json())
      .then(data => {
        setBrand(data.brands);
      })
      .catch(error => {
        console.error("Error fetching brands:", error);
      });

      fetch("https://vsmart.ajspire.com/api/shop")
      .then(response => response.json())
      .then(data => {
        setShop(data.product);
      })
      .catch(error => {
        console.error("Error fetching shop data:", error);
      });
  }, []);

  return (
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
      <Slider></Slider>
      < Categroyslider></Categroyslider>
      <div className="container">
        <div className="row content-reverse">
          <div className="col-lg-3">
            <div className="shop-widget">
              <h6 className="shop-widget-title">Filter by Category</h6>
              <ul className="shop-widget-list shop-widget-scroll" style={{ maxHeight: 279, overflowY: 'scroll', paddingRight: 10 }}>
                {cat.map(ell => (
                  <div key={ell.category_id} className="custom-control custom-checkbox d-flex align-items-center mb-3">
                    <input type="checkbox" className="custom-control-input" defaultChecked id={`category-${ell.category_id}`} />
                    <label className="custom-control-label" htmlFor={`category-${ell.category_id}`}>{ell.category_name}</label>
                  </div>
                ))}
              </ul>
            </div>
            <div className="shop-widget">
              <h6 className="shop-widget-title">Filter by Brands</h6>
              <ul className="shop-widget-list shop-widget-scroll" style={{ maxHeight: 279, overflowY: 'scroll', paddingRight: 10 }}>
                {brand.map(el => (
                  <div key={el.brand_id} className="custom-control custom-checkbox d-flex align-items-center mb-3">
                    <input type="checkbox" className="custom-control-input" defaultChecked id={`brand-${el.brand_id}`} />
                    <label className="custom-control-label" htmlFor={`brand-${el.brand_id}`}>{el.brand_name}</label>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="parent-container">
            {shop.map(el => (
              <div key={el.product_id} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
               <div className="bg-white text-center h-100 p-4 p-xl-5">
                    <div>
                      <div className="position-relative bg-light overflow-hidden">
                        <img className="img-fluid" src={el.brand_image} alt="" style={{ height: 100 }} />
                        <div className="bg-secondary rounded text-white position-absolute start-0 top-0 py-1 px-3">
                          {el.mrp_price - el.sale_price} Rsoff
                        </div>
                      </div>
                      <h4 className="mb-3">{el.english_name}</h4>
                      <p className="mb-4">{el.brand_name}</p>
                      <div>
                        <span className="text-primary me-1">{el.sale_price}</span>
                        <span className="text-body text-decoration-line-through">{el.mrp_price}</span>
                      </div>
                      <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">
                        Read More
                      </a>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
