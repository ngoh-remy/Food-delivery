import React from 'react'
import { useState } from 'react'
import Appdownload from '../../components/Appdownload/Appdownload'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
import Header from '../../components/Header/Header'
import './Home.css'

const Home= () => {

  const[category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
