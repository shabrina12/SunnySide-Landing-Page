import React from 'react';
import milkbottle from '../../images/desktop/image-gallery-milkbottles.jpg';
import orange from '../../images/desktop/image-gallery-orange.jpg';
import cone from '../../images/desktop/image-gallery-cone.jpg';
import sugarcubes from '../../images/desktop/image-gallery-sugarcubes.jpg';
import './imgCollection.css';

const imgCollection = () => {
  return (
    <div className='collection'>
      <div class="collection-img-container">
        <img src={milkbottle} alt="milk" />
      </div>
      <div class="collection-img-container">
        <img src={orange} alt="orange" />
      </div>
      <div class="collection-img-container">
        <img src={cone} alt="cone" />
      </div>
      <div class="collection-img-container">
        <img src={sugarcubes} alt="sugarcube" />
      </div>
    </div>
  )
}

export default imgCollection