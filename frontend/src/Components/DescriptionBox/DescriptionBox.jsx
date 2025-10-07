import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>A harmonious blend of captivating notes that intertwine 
              to create an enchanting fragrance experience. This perfume
              features fresh top notes that awaken the senses, a heart
              of elegant florals that evoke sophistication, and a warm
              base that lingers delicately on the skin. Perfect for any
              mood or occasion, it enhances your natural allure and 
              leaves a memorable impression wherever you go.
          </p>
        </div>
    </div>
  )
}
export default DescriptionBox