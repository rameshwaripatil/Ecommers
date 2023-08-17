import React from 'react'
import { useState } from 'react';
import Allbrand from './Allbrand';
import Brandslider from './Brandslider';

const Allbrandlist = () => {
    const [filterbrand, setfilterbrand] = useState([]);
    fetch("https://vsmart.ajspire.com/api/brands")
        .then((response) => response.json())
        .then((dataa) => {
            setfilterbrand(dataa.brands);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    return (
        <div>
            <section class="inner-section single-banner"style={{ background: "url(https://img.freepik.com/free-vector/flat-design-organic-food-facebook-cover-template_23-2149112283.jpg?size=626&ext=jpg&ga=GA1.2.686607583.1691572137&semt=ais ) no-repeat center",height:200,maxWidth:1500, marginTop:200 }}>
    <div class="container">
        <h2> All brand </h2>
        <h4 class="text-white">
        <ol class="breadcrumb">
            <i class="fas fa-home"></i> &nbsp;<li class="breadcrumb-item"><a href="/">Home</a></li>
           /<li aria-current="page"> All Brands</li>
        </ol>
        </h4>
    </div>
</section>
            <div class="container">

                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 isotope-items">

                    {
                        filterbrand.map((brand) => {
                            return <Allbrand
                                img={brand.brand_banner}
                                name={brand.brand_name} />
                        })
                    }
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="pagination text-left">
                                <nav class="d-flex justify-items-center justify-content-between">
                                    <div class="d-flex justify-content-between flex-fill d-sm-none">
                                        <ul class="pagination">

                                            <li class="page-item disabled" aria-disabled="true">
                                                <span class="page-link">« Previous</span>
                                            </li>


                                            <li class="page-item">
                                                <a class="page-link" href="https://vsmart.ajspire.com/all-brand?page=2" rel="next">Next »</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div>
                                            <p class="small text-muted text-center mb-4">
                                                Showing
                                                <span class="font-medium">1</span>
                                                to
                                                <span class="font-medium">20</span>
                                                of
                                                <span class="font-medium">172</span>
                                                results
                                            </p>

                                        </div>

                                        <div>
                                            <ul class="pagination">

                                                <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                                    <i class="fas fa-long-arrow-alt-left"></i>
                                                </li>

                                                <li class="page-item">
                                                    <a class="page-link" href="https://vsmart.ajspire.com/all-brand?page=2" rel="next" aria-label="Next »"><i class="fas fa-long-arrow-alt-right"></i></a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div></nav>

                            </div>
                        </div>
                    </div>    </div>

            </div>
        </div>
    )
}

export default Allbrandlist