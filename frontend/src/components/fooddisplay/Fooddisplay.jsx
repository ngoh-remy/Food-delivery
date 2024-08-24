import React, { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../fooditem/Fooditem'
import './Fooddisplay.css'

const Fooddisplay = ({category}) => {

    const {food_list} = useContext(Storecontext)

  return (
    <div className='food-display' id='food-display'>
        <h2> Top Dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
              {console.log(category,item.category);}
              if (category==="All" || category===item.category) {
                return <Fooditem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} /> 
                
              }
               
            })}
        </div>      
    </div>
  )
}

export default Fooddisplay
