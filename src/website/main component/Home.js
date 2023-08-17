import React from 'react'
import Ourprolist from '../components/Ourprolist'
import Grocerylist from '../components/Grocerylist'
import Featurelist from '../components/Featurelist'
import Categroyslider from '../components/Categroyslider'
import Brandslider from '../components/Brandslider'
import Slider from './Slider'

  const Home = () => {
  return (
    <div>  
      <Slider></Slider>
      <Categroyslider></Categroyslider>
      <Grocerylist></Grocerylist>
      <Ourprolist></Ourprolist>
      <Featurelist></Featurelist>
      <Brandslider></Brandslider>
      
    </div>
  )
}

export default Home