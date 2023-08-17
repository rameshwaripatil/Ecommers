
import React from 'react'
import Image from '../layout/logo1.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  const [ourgro, setourgro] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showBrandMenu, setShowBrandMenu] = useState(false)
  const [SubCategory, setsubcategory] = useState([]);
  const [ourbrand, setourbrand] = useState([]);


  const handleBrandMouseEnter = () => {
    setShowBrandMenu(true);
  };

  const handleBrandMouseLeave = () => {
    setShowBrandMenu(false);
  };
  const handleMouseEnter = () => {

    setShowMegaMenu(true);

  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };
  const getcategory = () => {
    fetch("https://vsmart.ajspire.com/api/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setourgro(data.categories);

        data.categories.forEach((category) => {
          getsubcategory(category.category_id);
        })
      })

      .catch((error) => console.error("Error fetching data:", error));
  };
  const getsubcategory = (category_id) => {
    fetch(`https://vsmart.ajspire.com/api/subcategories/${category_id}`)
      .then((response) => response.json())
      .then((data) => {
        const newsubcategory = data.subcategories;
        setsubcategory((previoussubcategory) => {

          const filtersubcategory = newsubcategory.filter(
            (newsubcategory) =>
              !previoussubcategory.some(
                (previoussubcategory) => previoussubcategory.subcategory_id === newsubcategory.subcategory_id
              )
          );
          return [...previoussubcategory, ...filtersubcategory];
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  const getbrand = () => {
    fetch("https://vsmart.ajspire.com/api/brands")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setourbrand(data.brands);
      })

      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {

    getcategory();
    getbrand();

  }, []);

  return (

    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex bg-success">
        <div className="col-lg-6 px-5 text-start">
          <small><h6>Welcome to VS Mart in Your Dream Online Store!</h6></small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <Link to="contact"><small style={{ color: 'white' }}>Contact us</small></Link>
          <small style={{ marginLeft: '5', color: 'white' }}>Follow us:</small>
          <a className="text-body ms-3" href><i className="fab fa-facebook-f" /></a>
          <a className="text-body ms-3" href><i className="fab fa-twitter" /></a>
          <a className="text-body ms-3" href><i className="fab fa-linkedin-in" /></a>
          <a className="text-body ms-3" href><i className="fab fa-instagram" /></a>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a className="navbar-brand ms-4 ms-lg-0">
          <img src={Image}></img>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-5  p-lg-0">
            <li>
              <Link class="navbar-brand me-auto ms-lg-5 p-lg-0" to="/home">Home</Link>
            </li>
            <li className="navbar-item dropdown-megamenu  ">

              <li className="  navbar-brand me-auto ms-lg-5 p-lg-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Categories
              </li>

              <Dropdown show={showMegaMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Dropdown.Menu className="mega-menu" style={{ width: '700px', marginLeft: '220' }}>
                  <div className="row">
                    {ourgro.map((el) => (
                      <div className="col-sm-3" key={el.category_id}>
                        <Link to="/category">
                          <h5 className='font-weight-bold'>{el.category_name}</h5>
                        </Link>

                        <ul className="megamenu-list sub">
  {SubCategory.length > 0 ? (
    SubCategory.filter((subcategory) => subcategory.subcategory_category_id === el.category_id)
      .slice(0, 5)
      .map((subcategory) => (
        <li key={subcategory.subcategory_id}>
          <Link
            className="text-black t"
            to={`/product-shop/${el.category_id}/${subcategory.subcategory_id}`}
            style={{
              textDecoration: 'none',
            }}
          >
            {subcategory.subcategory_name}
          </Link>
        </li>
      ))
  ) : (
    <li>Loading subcategories...</li>
  )}
</ul>
In this code, I added a conditional check using the SubCategory.length property. If the SubCategory array has elements (meaning it's not empty), the subcategories will be filtered, sliced, and mapped. If it's empty, a placeholder message like "Loading subcategories..." will be displayed.

This will ensure that you don't attempt to render subcategories before they have been fetched and populated into the state, thus preventing the error you were encountering.






                      </div>
                    ))}
                    <div class="section-btn-25">
                      <Link class="btn btn-outline" to="/product-shop/:cid/:scid ">
                        <i class="fas fa-eye"></i>
                        <span>view allCategories</span></Link></div>
                  </div>

                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li class="navbar-brand me-auto ms-lg-5 p-lg-0">
              <Link to="/shopping">Shop</Link></li>
            <li class="navbar-brand me-auto ms-lg-5 p-lg-0">
              <Link to="/about">About</Link></li>
            <li class="navbar-brand me-auto ms-lg-5 p-lg-0">
              <Link to="/blog">Blog</Link></li>
            <li className="navbar-item dropdown-megamenu">

              <li
                className="navbar-brand  me-auto ms-lg-5 p-lg-0"
                onMouseEnter={handleBrandMouseEnter}
                onMouseLeave={handleBrandMouseLeave}
              >
                Brand
              </li>

              <Dropdown show={showBrandMenu} onMouseEnter={handleBrandMouseEnter} onMouseLeave={handleBrandMouseLeave}>
                <Dropdown.Menu className="mega-menu" style={{ width: '700px', marginLeft: '220' }}>
                  <div className="row">
                    {ourbrand.map((el) => (
                      <div className="col-sm-3" key={el.brand_id}>
                        <Link to='/brand'>
                          <h5 className='font-weight-bold'>{el.brand_name}</h5></Link>


                      </div>
                    ))}

                    <div class="section-btn-25">
                      <Link class="btn btn-outline" to="/brandlist">
                        <i class="fas fa-eye"></i>
                        <span>view allBrands</span></Link></div>
                  </div>

                </Dropdown.Menu>
              </Dropdown>
            </li>

          </ul>
          <div className="navbar-info-group me-auto   d-flex align-items-center">
            <div className="me-lg-4">
              <i className="icofont-ui-touch-phone"></i>
              <p><small>call us</small> <a className="link-secondary" href="tel:8446092500"><span>(+91)8446092500</span></a></p>
            </div>
            <div>
              <i className="icofont-ui-email"></i>
              <p><small>email us</small> <a className="link-secondary" href="mailto:vsmart0932@gmail.com"><span>vsmart0932@gmail.com</span></a></p>
            </div>
          </div>
        </div>
        <div class="d-none d-lg-flex ms-2">
          <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
            <small class="fa fa-search text-body"></small>
          </a>
          <Link class="btn-sm-square bg-white rounded-circle ms-3 fa fa-user text-body" to="/login">login</Link>
          <Link to="/addcart">
            <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
              <small class="fa fa-shopping-bag text-body"></small>
            </a></Link>
        </div>


      </nav >
    </div>

  )
}

export default Header