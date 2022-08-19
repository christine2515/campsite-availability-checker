import React from 'react';
import './imageSlideshow.scss';
import img1 from '../../assets/camp1.jpeg'
import img2 from '../../assets/camp2.jpeg'
import img3 from '../../assets/camp3.jpeg'

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const colors = [img1, img2, img3]
const delay = 2000;

function ImageSlideshow() {
  const [index, setIndex] = React.useState(0);
  const timeout = React.useRef(null);

  function resetTimeout() {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeout.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length-1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return() => {
      resetTimeout();
    };

  }, [index]);


  return (
    <div className="container">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((img, index) => (
            <div
              className="slide"
              key={index}
            ><img src={img} alt="img" /></div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
  }
  
  export default ImageSlideshow;