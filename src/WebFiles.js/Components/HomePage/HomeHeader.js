import React,{ useEffect, useState } from "react"


function HomeHeader({ images }) {

  const [CurrentIndex,setCurrentIndex] =useState (0);

  useEffect(() =>{
    const interval =setInterval(() => {
      setCurrentIndex((preindex) =>(preindex +1) % images.length);
    },3000); //change image every 3seconds
    return () => clearInterval (interval)
  },[images]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length -1 :prevIndex -1
  )
}
  
  return (
      <>
    <div className='main-img'>
      <h2 className='img-text'>Trusted Quality, Affordable Prices</h2>
      <p className='img-text1'>Premium PVC, UPVC, and aluminum products without the premium price.</p>
      <h2 className='img-text2'>Transform Your Space with the Best Materials</h2>
      <p className='img-text3'>Choose PVC, UPVC, and aluminum for strength, style, and sustainability.</p>
    </div>
    <div className="slider">
<div
  className="slider-images"
  style={{
    transform: `translateX(-${CurrentIndex * 100}%)`,
  }}
>
  {images.map((image, index) => (
    <div
      key={index}
      className="slider-image"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0,0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    ></div>
  ))}
</div>
<button className="prev" onClick={previousSlide}>
  &#10094;
</button>
<button className="next" onClick={nextSlide}>
  &#10095;
</button>
</div>
    
</>
  )
}

export default HomeHeader
