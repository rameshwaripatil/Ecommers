import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './website/layout/Master'
import Home from './website/main component/Home'
import About from './website/components/About'
import Blog from './website/components/Blog'
import Login from './website/components/Login'
import Register from './website/main component/Register'
import Shopproduct from './website/components/Shopproduct'
import Productlist from './website/components/Productlist'
import Brand from './website/components/Brand'
import Allbrandlist from './website/components/Allbrandlist'
import Contact from './website/components/Contact'
import Addcart from './website/components/Addcart'
import Grocerylist from './website/components/Grocerylist'
import Subcatagorys from './website/components/Subcatagorys'

const Allroutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Master Rcf={Home} />}></Route>
                <Route path="/home" element={<Master Rcf={Home} />}></Route>
                <Route path="/shopping" element={<Master Rcf={Productlist}/>}></Route>
                <Route path="/shopproduct" element={<Master Rcf={Shopproduct}/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/about" element={<Master Rcf={About}/>}></Route>
                <Route path="/blog" element={<Master Rcf={Blog}/>}></Route>
                <Route path="/registration" element={<Register/>}></Route>
                <Route path="/category" element={<Master Rcf={Grocerylist}/>}/>
                <Route path="/brand" element={<Master Rcf={Brand}/>}/>
                <Route path="/brandlist" element={<Master Rcf={Allbrandlist}/>}/>
                <Route path="/contact" element={<Master Rcf={Contact}/>}/>
                <Route path="/addcart " element={<Master Rcf={Addcart}/>}/>
                <Route path="/product-shop/:cat_id/:sub_id" element={<Master Rcf={Subcatagorys} />} ></Route>

                
                </Routes>
                
                </BrowserRouter>
    )
}

export default Allroutes