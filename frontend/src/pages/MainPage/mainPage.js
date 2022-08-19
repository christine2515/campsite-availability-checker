import ImageSlideshow from '../../components/ImageSlideshow/imageSlideshow.js';
import AddRequest from '../../components/AddRequest/addRequest.js';
import React from 'react';
import './mainPage.scss';

function MainPage() {
    return (
      <div className="wrapper">
        <div className="left-container">
          <AddRequest />
        </div>
        <div className="right-container">
          <h2>This could be you!</h2>
            {/* change font of h2 */}
          <div className="image-slideshow">
            <ImageSlideshow />
          </div>
        </div>
      </div>
    );
  }
  
  export default MainPage;