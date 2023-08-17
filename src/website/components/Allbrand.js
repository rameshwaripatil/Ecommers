import React from 'react'
const Allbrand = (props) => {
    return (
        <div>
            <section class="inner-section">

            <div class="col all vegetables">
                <div class="brand-wrap">
                    <div class="brand-media">
                        <img src={props.img} alt="brand" style={{width:200}}/>
                        <div class="brand-overlay"><a href="/product-shop/208"><i class="fas fa-link"></i></a></div>
                    </div>
                    <div class="brand-meta">
                        <h4>{props.name}</h4>

                    </div>
                </div>
            </div>


        </section>
        </div>
    )
}

export default Allbrand