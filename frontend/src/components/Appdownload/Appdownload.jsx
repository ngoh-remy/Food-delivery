import React from 'react'
import { assets } from '../../assets/assets'
import './Appdownload.css'
const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p> For better experience Download <br /> Food App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default Appdownload
