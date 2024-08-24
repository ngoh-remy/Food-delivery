import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
const Add = () => {
  return (
    <div className='add'>
        <form className='flex-col'>
            <div className='add-img-upload flex col'>
              <p>Upload Image</p>
              <label htmlFor="image">
                <img src={assets.upload_area} alt="" />
              </label>
              <input type="file" id="image" hidden required />
            </div>
            <div className="add-product-name flex-col">
              <p>Product Name</p>
              <input type="text" name="name" placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
              <p>Product description</p>
              <textarea name="description" rows="6" placeholder='Write content here' required ></textarea>
            </div>
            <div className="add-category-price">
              <div className="add-category flex-col">
                <p>Product category</p>
                <select name='category'>
                  <option value="menu1">menu1</option>
                  <option value="menu2">menu2</option>
                  <option value="menu3">menu3</option>
                  <option value="menu4">menu4</option>
                  <option value="menu5">menu5</option>
                  <option value="menu6">menu6</option>
                  <option value="menu7">menu7</option>
                  <option value="menu8">menu8</option>
                </select>
              </div>
              <div className="add-price flex-col">
                <p>Product price</p>
                <input type="Number" name='price' placeholder='2000XAF'/>
              </div>
            </div>
            <button type='submit' className='add-btn' >ADD</button>
        </form>
      
    </div>
  )
}

export default Add
