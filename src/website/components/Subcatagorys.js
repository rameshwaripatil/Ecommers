import React from 'react'
import { useEffect, useState } from 'react';
// import '../../App.css';
import { FaHome, FaShoppingBasket } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Subcatagorys = () => {
    let { cat_id, sub_id } = useParams();
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      if (index === activeIndex) {
        setActiveIndex(null); // Close the currently open submenu
      } else {
        setActiveIndex(index); // Open the clicked submenu and close others
      }
    };
    //product
    const [Category, setCategory] = useState([]);
    //categoryname  for banner
    const [category_, setCategory_] = useState([]);
    //subcategoryname  for banner
    const [subcategory_, subCategory_] = useState([]);
    console.log(subcategory_);
    //scroll menu
    const [Cat, setCate] = useState([]);
  
    const [brand, setBrand] = useState([]);
  
    //slider after banner
    const [Sub, setSub] = useState([]);
  
    //count for brand and categorywise 
    const [Count, setCount] = useState([]);
    console.log(Count);
    const [Count1, setCount1] = useState([]);
    console.log(Count1);
  
    const getCategoryData = () => {
      // console.log();
      try {
        fetch(`https://vsmart.ajspire.com/api/product-shop/${cat_id}/${sub_id}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            setCategory(data.category.data);
            setCategory_(data.category_);
            subCategory_(data.subcategory_);
            setCate(data.cat);
            setBrand(data.brand);
            setSub(data.sub);
            setCount(data.count);
            setCount1(data.count1);
          })
  
  
  
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
  
      } catch (error) {
  
      }
  
  
    }
    useEffect(() => {
      getCategoryData();
    }, [cat_id, sub_id]);
    return (
      <div>
  
        {/* <div className="breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-content">
              <img style={{ width: "1200px" }} src="https://t3.ftcdn.net/jpg/03/35/85/36/360_F_335853623_ffbydYUHjQtLMchtc9QRNoBjzYaZYYg3.jpg"></img>
              <ul >
  
  
                <Link to="/" style={{ marginLeft: "400px", paddingBottom: "100px" }}>Home</Link> /
                <li className="active">Shop Left Sidebar</li>
              </ul>
            </div>
          </div>
        </div> */}
  
  <div id="header-carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
  
            <div className='img'>
              <img src='https://t3.ftcdn.net/jpg/03/35/85/36/360_F_335853623_ffbydYUHjQtLMchtc9QRNoBjzYaZYYg3.jpg' style={{ height: "400px", width: "1300px", opacity: "0.5",color: "green" }} />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                
               
                  <div className="container" style={{ paddingBottom: "150px",color:"black" }}>
                    <h2>{category_.category_name}</h2>
                    <h4 >
  
                        <Link to="/" style={{color:"black"}}>Home</Link>     /
                      {/ {subcategory_.subcategory_name} /}
                      {subcategory_.subcategory_name}
                    </h4>
                  </div>
                  </div>
            </div>
          </div>
        </div>
        <AliceCarousel
          mouseTracking
          items={Sub.map((subslider) => (
            <div key={subslider.subcategory_image} className="slider-image-container"  style={{marginTop:100}} >
              <img src={subslider.subcategory_image} alt={subslider.Iceream} height={'100px'} width={'100px'} className="slider-image"  />
            </div>
          ))}
  
          responsive={{
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 },
          }}
          autoPlay
          autoPlayInterval={3000}
          infinite
        />
  
  
        <div className="content-wraper pt-60 pb-60 pt-sm-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="single-banner shop-page-banner">
                  {/* {Category.slice(0,6).map((item)=>(
              <a href="#">
                <img src={item.category_banner} alt="Li's Static Banner" />
              </a>
            ))} */}
                </div>
  
                <div className="shop-top-bar mt-30">
                  <div className="shop-bar-inner">
                    <div className="product-view-mode">
                      <ul className="nav shop-item-filter-list" role="tablist">
                        <li className="active" role="presentation"><a aria-selected="true" className="active show" data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view"><i className="fa fa-th" /></a></li>
                        <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="list-view" href="#list-view"><i className="fa fa-th-list" /></a></li>
                      </ul>
                    </div>
                    <div className="toolbar-amount">
                      <span>Showing 1 to 9 of 15</span>
                    </div>
                  </div>
                  <div className="product-select-box">
                    <div className="product-short">
                      <p>Sort By:</p>
                      <select className="nice-select">
                        <option value="trending">Relevance</option>
                        <option value="sales">Name (A - Z)</option>
                        <option value="sales">Name (Z - A)</option>
                        <option value="rating">Price (Low &gt; High)</option>
                        <option value="date">Rating (Lowest)</option>
                        <option value="price-asc">Model (A - Z)</option>
                        <option value="price-asc">Model (Z - A)</option>
                      </select>
                    </div>
                  </div>
                </div>
  
                <div className="shop-products-wrapper">
                  <div className="tab-content">
  
  
                    <div id="grid-view" className="tab-pane fade active show" role="tabpanel">
                      <div className="product-area shop-product-area">
                        <div className="row">
                          {Category.slice(0, 6).map((item) => (
  
  
  
  
                            <div className="col-lg-3 col-md-3 col-sm-8 mt-40">
                              <div className="single-product-wrap">
                                <div className="product-image">
                                  <a href="single-product.html">
                                    <img src={item.product_image} alt="Li's Product Image" />
                                  </a>
                                  <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                  <div className="product_desc_info">
                                    <div className="product-review">
                                      <h5 className="manufacturer">
                                        <a href="product-details.html">Graphic Corner</a>
                                      </h5>
                                      <div className="rating-box">
                                        <ul className="rating">
                                          <li><i className="fa fa-star-o" /></li>
                                          <li><i className="fa fa-star-o" /></li>
                                          <li><i className="fa fa-star-o" /></li>
                                          <li className="no-star"><i className="fa fa-star-o" /></li>
                                          <li className="no-star"><i className="fa fa-star-o" /></li>
                                        </ul>
                                      </div>
                                    </div>
                                    <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                    <div className="price-box">
                                      <span className="new-price">$46.80</span>
                                    </div>
                                  </div>
                                  <div className="add-actions">
                                    <ul className="add-actions-link">
                                      <li className="add-cart active"><a href="shopping-cart.html">Add to cart</a></li>
                                      <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                      <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
  
                            </div>
                          ))}
  
  
                        </div>
                      </div>
                    </div>
  
  
                    {/* <div id="list-view" className="tab-pane fade product-list-view" role="tabpanel">
                  <div className="row">
                    <div className="col">
  
                      <div className="row product-layout-list">
                        <div className="col-lg-3 col-md-5 ">
                          <div className="product-image">
                            <a href="single-product.html">
                              <img src="images/product/large-size/12.jpg" alt="Li's Product Image" />
                            </a>
                            <span className="sticker">New</span>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-7">
                          <div className="product_desc">
                            <div className="product_desc_info">
                              <div className="product-review">
                                <h5 className="manufacturer">
                                  <a href="product-details.html">Graphic Corner</a>
                                </h5>
                                <div className="rating-box">
                                  <ul className="rating">
                                    <li><i className="fa fa-star-o" /></li>
                                    <li><i className="fa fa-star-o" /></li>
                                    <li><i className="fa fa-star-o" /></li>
                                    <li className="no-star"><i className="fa fa-star-o" /></li>
                                    <li className="no-star"><i className="fa fa-star-o" /></li>
                                  </ul>
                                </div>
                              </div>
                              <h4><a className="product_name" href="single-product.html">Hummingbird printed t-shirt</a></h4>
                              <div className="price-box">
                                <span className="new-price">$46.80</span>
                              </div>
                              <p>Beach Camera Exclusive Bundle - Includes Two Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers. Fill The Entire Room With Exquisite Sound via Ring Radiator Technology. Stream And Control R3 Speakers Wirelessly With Your Smartphone. Sophisticated, Modern Desig</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="shop-add-action mb-xs-30">
                            <ul className="add-actions-link">
                              <li className="add-cart"><a href="#">Add to cart</a></li>
                              <li className="wishlist"><a href="wishlist.html"><i className="fa fa-heart-o" />Add to wishlist</a></li>
                              <li><a className="quick-view" data-toggle="modal" data-target="#exampleModalCenter" href="#"><i className="fa fa-eye" />Quick view</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div> */}
  
  
                    <div className="paginatoin-area">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 pt-xs-15">
                          <p>Showing 1-12  </p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul className="pagination-box pt-xs-20 pb-xs-15">
                            <li><a href="#" className="Previous"><i className="fa fa-chevron-left" /> Previous</a>
                            </li>
                            <li className="active"><a href="#">1</a></li>
  
                            <li>
                              <a href="#" className="Next"> Next <i className="fa fa-chevron-right" /></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
              <div className="col-lg-3 order-2 order-lg-1">
                {/*sidebar-categores-box start  */}
                <div className="sidebar-categores-box mt-sm-30 mt-xs-30">
                  <div className="sidebar-title">
                    <h2>Category</h2>
                  </div>
  
                  <div className="category-sub-menu">
                    <ul>
                      {Cat.map((cat, index) => (
                        <li key={index} className={activeIndex === index ? 'open' : ''}>
                          <a onClick={() => handleItemClick(index)} href="#" className='font-weight-bold text-dark'>
                            {cat.category_name}
                          </a>
                          <ul style={{ display: activeIndex === index ? 'block' : 'none' }}>
                            {/ Submenu items here /}
                            {
                              Sub.filter((sub) => sub.subcategory_category_id === cat.category_id).map((sub) => (
  
  
                                <li className='text-dark'><Link to={`/product-shop/${cat.category_id}/${sub.subcategory_id}`}> {sub.subcategory_name} </Link></li>
                              ))
                            }
                          </ul>
                        </li>
  
  
                      ))}
                    </ul>
                  </div>
  
                </div>
  
                <div className="sidebar-categores-box mt-sm-30 mt-xs-30">
                  <div className="sidebar-title">
                    <h2>Brand</h2>
                  </div>
  
                  <div className="category-sub-menu">
                    <ul>
                      {/ {brand} /}
                      <li className="has-sub"><a href="# ">Prime Video</a>
  
                      </li>
  
                    </ul>
                  </div>
  
                </div>
                {/*sidebar-categores-box end  */}
                {/*sidebar-categores-box start  */}
                <div className="sidebar-categores-box">
                  <div className="sidebar-title">
                    <h2>Filter By</h2>
                  </div>
  
                  <button className="btn-clear-all mb-sm-30 mb-xs-30">Clear all</button>
  
  
                  <div className="filter-sub-area">
                    <h5 className="filter-sub-titel">Brand</h5>
                    <div className="categori-checkbox">
                      <form action="#">
                        <ul>
  
                          <li><input type="checkbox" name="product-categori" /><a href="#">Prime Video (13)</a></li>
  
                        </ul>
                      </form>
                    </div>
                  </div>
  
  
                  <div className="filter-sub-area pt-sm-10 pt-xs-10">
                    <h5 className="filter-sub-titel">Categories</h5>
                    <div className="categori-checkbox">
                      <form action="#">
                        <ul>
                          <li><input type="checkbox" name="product-categori" /><a href="#">Graphic Corner (10)</a></li>
                        </ul>
                      </form>
                    </div>
                  </div>
  
                </div>
                {/*sidebar-categores-box end  */}
              </div>
            </div>
          </div>
        </div>
  
      </div>
    )
}

export default Subcatagorys